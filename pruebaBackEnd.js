
var alejandro = {
id: 100,
nombre: 'Pablo',
apellido: 'Rico',
peso: 75,
edad: 29

}


var lucas = {
  id: 101,
  nombre: 'Lucas',
  apellido: 'Duharte',
  peso: 78,
  edad: 23
  
  }
  
  
var agustina = {
  id: 102,
  nombre: 'Agustina',
  apellido: 'Gomez',
  peso: 64,
  edad: 23
  
  }
  
  
var solanch = {
  id: 103,
  nombre: 'Solanch',
  apellido: 'Roa',
  peso: 66,
  edad: 21
  
  }
  
  
var angel = {
  id: 104,
  nombre: 'Angel',
  apellido: 'Codicia',
  peso: 98,
  edad: 33
  
  }
  
  
var martin = {
  id: 105,
  nombre: 'Martin',
  apellido: 'Lazarte',
  peso: 75,
  edad: 30
  
  }
  
 
var paola = {
  id: 106,
  nombre: 'Paola',
  apellido: 'Cantaro',
  peso: 95,
  edad: 36
  
  }
  
   
var rocio = {
  id: 107,
  nombre: 'Rocio',
  apellido: 'Olmedo',
  peso: 65,
  edad: 54
  
  }
  
 
var alvaro = {
  id: 108,
  nombre: 'Alvaro',
  apellido: 'Montes',
  peso: 85,
  edad: 46
  
  }
  
   
var anastacia = {
  id: 109,
  nombre: 'Anasticia',
  apellido: 'Roccuso',
  peso: 51,
  edad: 9
  
  }
  
  
var leticia = {
  id: 110,
  nombre: 'Leticia',
  apellido: 'Amigon',
  peso: 55,
  edad: 19
  
  }
  
//const esDePocoPeso = personas => personas.peso < 80;
const esDePocoPeso = ({peso}) => peso < 80;

var personas = [alejandro, lucas, agustina, solanch, angel, martin, paola, rocio, alvaro, anastacia, leticia];

var personasDePocoPeso = personas.filter(esDePocoPeso);

console.log(personasDePocoPeso);

/*var arrUsuario = [
  {
    id:1,
    nombre: "Pablo"
  },
  {
    id:2,
    nombre: "Agustina"
  },
  {
    id:3,
    nombre: "Solanch"
  }
];

for (var i = 0; i < arrUsuario.length; i++) {
  console.log(arrUsuario[i].nombre);
}*/
