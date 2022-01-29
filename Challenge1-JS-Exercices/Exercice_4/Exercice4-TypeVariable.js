
a = "1";
b = "2";
c = a + b;
 
document.writeln("Type of variables:");
document.writeln("  Type of a='"+a+"' is a "+typeof(a));
document.writeln("  Type of b='"+b+"' is a "+typeof(b));
document.writeln(" Type of c= '"+c+"' is a "+typeof(c));
document.writeln("Type after tranformation:");

document.writeln("  Type of a= "+a+" is a "+typeof(Number(a)));
document.writeln("  Type of b= "+b+" is a "+typeof(Number(b)));
c=Number(a)+Number(b);
document.writeln(" Type of c= a+b = "+c+" is a "+typeof(c));

