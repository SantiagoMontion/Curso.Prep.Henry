// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz= [];
  var par=[]
  for (item in objeto){
    
    par.push(item,objeto[item])
    matriz.push(par);
    par=[]
    
  }
  return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var letra='';
  
  var obj={}
  for (i =0; i< string.length; i++){
    var cont=0;
    letra= string[i];
    for (j=0; j< string.length;j++){
      if (letra === string[j]){
        cont+=1;
        
      }
      obj[letra]=cont;
    }
  }
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var nueva=''
  var resto=''
  for (i=0;i<s.length;i++){
    if (s.charAt(i) === s.charAt(i).toUpperCase()){
      nueva+=s.charAt(i)
      

  }
    else{
      resto+=s.charAt(i)
  }
  }
  
  return (nueva+resto)
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nueva=''
  var sep= str.split(" ")

  for (i=0;i<sep.length;i++){
    for(j=sep[i].length;j>0;j--){
      nueva=nueva+ sep[i][j-1]
    }
    if (i<sep.length-1){
      nueva+=" "
    }
}
  return nueva;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí 141414  4   14141
  var falta,numeroInvertido,resto;
  falta=numero;
  numeroInvertido=0;
  resto=0;
  while(falta !== 0){
    resto=falta%10;
    falta=falta/10;
    falta=Math.trunc(falta);
    numeroInvertido=numeroInvertido*10+resto;
  }

  if (numeroInvertido === numero){
    return ("Es capicua")
  }
  else return "No es capicua"

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array=[]
  var nueva=''
  for (i=0;i<cadena.length;i++){
    array.push(cadena[i])
  }
  for (i=0;i<array.length;i++){
  
    if (array[i] === 'a'){
      array.splice(i,1);
    }
    if (array[i] === 'b'){
      array.splice(i,1);
      }
    if (array[i] === 'c'){
        array.splice(i,1);
      }

    nueva+=array[i]
  }
  if (nueva === 'undefined'){
    return '';
  }
  else return nueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  arr.sort(function(a, b){
    return a.length - b.length;
  });
    
  return arr;
  
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 

  var result = arreglo1.filter(function(elem){
    if ((arreglo1.includes(elem)) && (arreglo2.includes(elem))){
      return elem;
    }
  })
  result.sort()
  return result;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

