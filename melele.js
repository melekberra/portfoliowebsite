let example = 20;

let x;

let my_cat;

x = 30;

example + my_cat

console . log(example)

console . log(x)

my_cat = 50

console . log(my_cat)

const coding = 50

console . log(coding)

let greetings = "Hello"

let name = "Alice"

let space = " "

let mario = "87"

let superb = "54"

let supermario = superb + mario

console . log(supermario);

let isStudent = true;

let hasJob = false;

console .log(example+my_cat);

let total = example + my_cat

console . log(total)

let h = greetings + space + name 

console . log(h)

mario  = 30

console . log (mario)

let musics = ["Rock","Jazz","Heavy-Metal","Pop","Indie","Rap"]

for(let i=0; i < musics.length;i++) {
    console.log(musics[i])
}

console . log(musics)

let person = {
    firstName: "Melek",
    lastname: "Aksu",
    age: 19,
    hobbies:["Reading","TListening-to-music"],
    address:{
        street: "Yavuz-Selim",
        city: "İstanbul",
        country: "Türkiye",
    }
}

console . log(person)

for (let i =0; i < 5 ; i++){
    console.log(i);
}

let temperature = 25;
if(temperature > 20){
    console.log("It's a warm day!");
}

let hour=18;
if(hour < 12 ){
    console.log("Good Morning!");
}

let age = 25;

if(age>=18){
    if(age<21){
        console.log("You are an adult but not yer allowed to drink");
    }else{
        console.log("You are an adult and allowed to drink.");
    }
    }else{
        console.log("You are a minor.");
    }

function b() {
    let y = 20;
    console.log(y);
}

b();

function exampleConst() {
    const z =30;
    z=40
console.log(z);
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet(`Melek`);

const add = function(a,b) {
    return a+b;
};
console.log(add(5,3));

let basePrice=50;
let discount=0.2;

let finalPrice =basePrice - (basePrice * discount);

const multiply = (x,y) => x*y;
console.log(multiply(4,6));

let elementById = document.getElementById('myElement');
let elementByClass = document.getElementsByClassName('myClass')
let elementByTag = document.getElementsByTagName('div');
let elementByQuery = document.querySelector('.myClass');

function addItalic(){
  let myParagraph=document.getElementById('myParagraph');
  myParagraph.classList.add('italic');
}