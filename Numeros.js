var dato1=0, dato2=0, formulaSuma=0, formulaPotencia=0;

for (n = 1; n<=4; n++){ 
 dato1 = parseInt (prompt ("Escriba un numero "));
 dato2 = parseInt (prompt ("Escriba un segundo numero "));

 if (dato1 > dato2) {
 formulaSuma = (dato1 + dato2);
 alert ("La suma de los dos números es: " + formulaSuma);
 }

 else if (dato1 < dato2){

 formulaPotencia = (Math.pow(dato1,2)+ (Math.pow(dato2,2)));

 alert (" Ambos numeros fueron elevados a '2' por individual, seguidamente fueron sumados los resultados correspondientes de ambos números, dando como resultado final: " + formulaPotencia);

 } 

 else if (dato1 == dato2) {
 alert( "Ambos numeros son iguales "); 

 } 
}