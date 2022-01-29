const form = document.querySelector('form');
const ul = document.querySelector('ul');
const template = document.querySelector('#todo-row').content;
const search = document.querySelector('#search');

let index;
let onEdit = false;
let store = JSON.parse(localStorage.getItem('todoList')) || [];

const genTodo = obj => {
  // on crée une copie du template
  const clone = template.cloneNode(true);
  // on accède à l'élément div avec la class todo-text à tavers clone
  const todoText = clone.querySelector('.todo-text');
  const timeText = clone.querySelector('.time-text');

  const li = clone.querySelector('.todo');
  const check = clone.querySelector('.check');

  check.innerHTML = obj.status === true ? '<i class="fas fa-check"></i>' : '';
  li.id = obj.id;
  console.log(obj);
  todoText.innerText = obj.todo;
  timeText.innerText = obj.time;

  ul.appendChild(clone);
};

if (store.length > 0) {
  store.forEach(todoObj => {
    genTodo(todoObj);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const todo = form.add.value.trim();
  const time = form.time.value.trim();

  if (todo === ''||  time ==''){
    onEdit = false;
    console.log(onEdit);
    return;
  }

  if (onEdit) {console.log(onEdit);
    Array.from(ul.children)[index].children[0].children[1].innerText = todo;
    Array.from(ul.children)[index].children[0].children[2].innerText = time;
    onEdit = false;
    store[index].todo = todo;
    store[index].time = time;

    localStorage.setItem('todoList', JSON.stringify(store));
    form.reset();

    return;
  }

  const id = Math.floor(Math.random() * 1000);
  const todoObj = {
    id: id,
    todo: todo,
    time:time,
    status: false,
  };
  store.push(todoObj);

  genTodo(todoObj);

  localStorage.setItem('todoList', JSON.stringify(store));

  form.reset();
});

ul.addEventListener('click', function (event) {
  if (event.target.classList.contains('todo-text')) {
    event.target.previousElementSibling.innerHTML =
      event.target.previousElementSibling.innerHTML === '' ? '<i class="fas fa-check"></i>' : '';

    store.map(todo => {
      if (todo.id == event.target.parentElement.parentElement.id) {
        todo.status = !todo.status;
      }

      return todo;
    });

    localStorage.setItem('todoList', JSON.stringify(store));
  }

  if (event.target.classList.contains('delete')) {
    event.target.closest('li').remove();
    store = store.filter(todo => todo.id != event.target.closest('li').id);

    localStorage.setItem('todoList', JSON.stringify(store));
  }

  if (event.target.classList.contains('edit')) {
    index = Array.from(ul.children).indexOf(event.target.closest('li'));
    form.add.value = event.target.parentElement.previousElementSibling.previousElementSibling.innerText;
    form.time.value = event.target.parentElement.previousElementSibling.innerText;
    onEdit = true;
  }
});

search.addEventListener('keyup', () => {
  Array.from(ul.children).forEach(li => {
    if (!li.children[0].children[1].innerText.includes(search.value.trim())) {
      li.classList.add('filtered');
    } else {
      li.classList.remove('filtered');
    }
  });
});

///animation
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
