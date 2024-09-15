const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

let options = {
fruits: [
"Apple",
"Blueberry",
"Mango",
"Strawberry",
"Guava",
"Kiwi",
"Watermelon",
"Melon",
"Peach",
"Apricot",
"Orange",
"Cramberry",
"Banana",
"Pineapple",
"Lemon",
"Tomato",
"Kaki",
"Pomegranate",
"Cherry",
"Grapes",
"Pear",
"Papaya",
"Dragonfruit",
"Passionfruit",
"Coconut",
"Avocado",
"Cantaloupe",
"Nectarine",
"Mandarin",
"Kiwano",
"Plantains",
"Jackfruit",
"Starfruit",
"Lychee",
"Blackberry",
"Rambutan",
"Tamarillo",
"Santol",
"Fig",
"Date",
"Prickly pear",
"Cocoa",
"Raspberry",
"Quince",
"Cassis",
"Medlar",
"Currant",
"Olive",
],
 animals: [
    "Hedgehog",
    "Lion",
    "Tiger",
    "Cow",
    "Racoon",
    "Cat",
    "Dog",
    "Lizard",
    "Giraffe",
    "Elephant",
    "Hyene",
    "Jaguar",
    "Cougar",
    "Duck",
    "DragonOfKomodo",
    "Bear",
    "PolarBear",
    "GrizzlyBear",
    "Horse",
    "Wolf",
    "Panda",
    "Koala",
    "Narwhal",
    "Snake",
    "Shark",
    "Sheep",
    "Cheetah",
    "Leopard",
    "Turtle",
    "RedPanda",
    "Pig",
    "Otter",
    "Donkey",
    "Squirrel",
    "Rooster",
    "Ferret",
    "Deer",
    "Sloth",
    "Monkey",
    "Goat",
    "Frog",
    "Toad",
    "Gorilla",
    "Rhinoceros",
    "Hippopotamus",
    "Camel",
    "Platypus",
    "Bat",
    "Rabbit",
    "Zebra",
    "Fox",
    "Panther",
    "Tortoise",
    "Crocodile",
    "Porcupine",
    "Pigeon",
    "Crow",
    "Vulture",
    "Salmon",
    "Falcon",
    "Goose",
    "Armadillo",
    "Fox",
    "Jackal",
    "Antelope",
    "Lynx",
    "Gazelle",
    "Ostrich",
    "Whale",
    "Dolphin",
    "Emu",
    "Rat",
    "Peacock",
    "Owl",
    "Mouse",
    "Elk",
    "Bull",
    "Kangaroo",
    "Baboon",
    "Chameleon",
    "Hawk",
    "Jellyfish",
    "Swan",
    "Flamingo",
    "Iguana",
    "Sardine",
    "Parrot",
    "Bizon",
    "Meerkat",
    "Crab",
],
Countries: [
    "Algeria",
    "Germany",
    "Nigeria",
    "Canada",
    "NewZealand",
    "Australia",
    "Bahrain",
    "Argentina",
    "Portugal",
    "Wales",
    "England",
    "Moldova",
    "Morrocco",
    "Spain",
    "Italy",
    "Austria",
    "SouthAfrica",
    "Lesotho",
    "Zimbabwe",
    "Mexico",
    "Ghana",
    "Japan",
    "SaudiArabia",
    "Qatar",
    "Tunisia",
    "Senegal",
    "Russia",
    "Afghanistan",
    "Iran",
    "Irak",
    "Croatia",
    "Brazil",
    "Ecuador",
    "Jamaica",
    "Liberia",
    "France",
    "Mali",
    "Cameroon",
    "Mauritania",
    "USA",
    "Palestine",
    "Ukraine",
    "Kosovo",
    "Maldives",
    "UAE",
    "Syria",
    "Colombia",
    "Libya",
    "Lebanon",
    "Madagascar",
    "Somalia",
    "Zambia",
    "Slovakia",
    "Niger",
    "Uruguay",
    "ElSalvador",
    "Kazakhstan",
    "Fiji",
    "Slovenia",
    "Albania",
    "Jordan",
    "Switzerland",
    "Belgium",
    "IvoryCoast",
    "Thailand",
    "Phillipines",
    "China",
    "Paraguay",
    "Cuba",
    "Tchad",
    "Finland",
    "Norway",
    "Mongolia",
    "Angola",
    "DemocraticRepublicOfCongo",
    "Sudan",
    "SouthSudan",
    "Tanzania",
    "Nepal",
    "Indonesia",
    "India",
    "Bolivia",
    "CostaRica",
    "Chile",
    "Ethiopia",
    "Kenya",
    "Turkmenistan",
    "Turkey",
    "Cambodia",
    "Taiwan",
    "SouthKorea",
    "NorthKorea",
    "Uganda",
    "Sweden",
    "Gabon",
    "Peru",
    "Iceland",
    "Uzbekistan",
    "Kuwait",
    "Oman",
    "Pakistan",
    "Venezuela",
    "Nicuaragua",
    "Gibraltar",
    "SanMarino",
    "Ireland",
    "Scotland",
    "Tadjikistan",
    "Vietnam",
    "Greece",
    "TrinidadAndTobago",
    "Burundi",
    "Botswana",
    "Bhutan",
    "Gambia",
    "CapeVerde",
    "Guatemala",
    "WesternSahara",
    "CentralAfricanRepublic",
    "Cyprus",
    "Benin",
    "Suriname",
    "Serbia",
    "Poland",
    "BosniaAndHerzegovina",
    "FrenchGuyana",
    "Egypt",
    "Romania",
    "Kyrgystan",
    "Latvia",
    "NorthIreland",
    "Swaziland",
    "Namibia",
    "Bahamas",
    "Eritrea",
    "Yemen",
    "Panama",
    "Guyana",
    "PapuaNewGuinea",
    "Belarus",
    "Singapour",
    "Congo",
    "EquatorialGuinea",
    "Nauru",
    "Armenia",
    "Estonia",
    "Azerbaidjan",
    "Andorra",
    "AntiguaAndBarbuda",
    "Bangladesh",
    "Barbade",
    "Belize",
    "Myanmar",
    "Brunei",
    "Bulgaria",
    "BurkinaFaso",
    "Burundi",
    "Comores",
    "CookIslands",
    "Danemark",
    "Djibouti",
    "DominicanRepublic",
    "Dominique",
    "Georgia",
    "Grenada",
    "GuineaBissau",
    "Haiti",
    "Hungary",
    "Honduras",
    "Kiribati",
    "Laos",
    "Lituania",
    "Luxembourg",
    "Liechtenshtein",
    "NorthMacedonia",
    "Malaysia",
    "Malawi",
    "Malta",
    "Maurice",
    "MarshallIslands",
    "Micronesia",
    "Monaco",
    "Montenegro",
    "Mozambique",
    "Niue",
    "Palau",
    "Netherlands",
    "PapouasieNewGuinea",
    "Rwanda",
    "SainteLucie",
    "SolomonIslands",
    "SamoaIslands",
    "SaintVincentEtLesGrenadines",
    "SaoTomeEtPrincipe",
    "Seychelles",
    "SierraLeone",
    "SriLanka",
    "Suriname",
    "CzechRepublic",
    "OrientalTimor",
    "Togo",
    "TongaIslands",
    "Vanuatu",
    "Vatican"
]
}

let winCount = 0;
let count = 0;
let chosenWord = "";

const displayOptions = () => {
optionsContainer.innerHTML += `<h3>Please select an element</h3>`;
let buttonCon = document.createElement("div");
for (let value in options) {
buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`
}
optionsContainer.appendChild(buttonCon);
};

const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");

    optionsButtons.forEach((button) => {
      button.disabled = true;
    });
  

    letterButtons.forEach((button) => {
      button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
  };
  
 
  const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");

    optionsButtons.forEach((button) => {
      if (button.innerText.toLowerCase() === optionValue) {
        button.classList.add("active");
      }
      button.disabled = true;
    });
  
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";
  
    let optionArray = options[optionValue];
   
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
  

    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  
   
    userInputSection.innerHTML = displayItem;
  };
  
  
  const initializer = () => {
    winCount = 0;
    count = 0;
  
    
    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";
  

    for (let i = 65; i < 91; i++) {
      let button = document.createElement("button");
      button.classList.add("letters");

      button.innerText = String.fromCharCode(i);
     
      button.addEventListener("click", () => {
        let charArray = chosenWord.split("");
        let dashes = document.getElementsByClassName("dashes");
     
        if (charArray.includes(button.innerText)) {
          charArray.forEach((char, index) => {
          
            if (char === button.innerText) {
    
              dashes[index].innerText = char;
             
              winCount += 1;
        
              if (winCount == charArray.length) {
                resultText.innerHTML = `<h2 class='win-msg'>Congratulations! You Won!</h2><p>The word was <span>${chosenWord}</span></p>`;

                blocker();
              }
            }
          });
        } else {
      
          count += 1;
          
          drawMan(count);

          if (count == 6) {
            resultText.innerHTML = `<h2 class='lose-msg'>You Lost :(</h2><p>The word was <span>${chosenWord}</span></p>`;
            blocker();
          }
        }

        button.disabled = true;
      });
      letterContainer.append(button);
    }
  
    displayOptions();

    let { initialDrawing } = canvasCreator();

    initialDrawing();
  };
  

  const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
  
   
    const drawLine = (fromX, fromY, toX, toY) => {
      context.moveTo(fromX, fromY);
      context.lineTo(toX, toY);
      context.stroke();
    };
  
    const head = () => {
      context.beginPath();
      context.arc(70, 30, 10, 0, Math.PI * 2, true);
      context.stroke();
    };
  
    const body = () => {
      drawLine(70, 40, 70, 80);
    };
  
    const leftArm = () => {
      drawLine(70, 50, 50, 70);
    };
  
    const rightArm = () => {
      drawLine(70, 50, 90, 70);
    };
  
    const leftLeg = () => {
      drawLine(70, 80, 50, 110);
    };
  
    const rightLeg = () => {
      drawLine(70, 80, 90, 110);
    };
  
    
    const initialDrawing = () => {
   
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      drawLine(10, 130, 130, 130);

      drawLine(10, 10, 10, 131);

      drawLine(10, 10, 70, 10);
    
      drawLine(70, 10, 70, 20);
    };
  
    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
  };
  

  const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
      case 1:
        head();
        break;
      case 2:
        body();
        break;
      case 3:
        leftArm();
        break;
      case 4:
        rightArm();
        break;
      case 5:
        leftLeg();
        break;
      case 6:
        rightLeg();
        break;
      default:
        break;
    }
  };
    newGameButton.addEventListener("click", initializer);
  window.onload = initializer;

  let myAudio = document.querySelector("#audio")
  myAudio.play()
  