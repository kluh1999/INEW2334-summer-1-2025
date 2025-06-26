//saving the JSON object into a variable to use later
const data = {
    "fruits": [
      {
        "name": "Apple",
        "color": "Red",
        "hasSeeds": true,
        "averageWeightGrams": 182
      },
      {
        "name": "Banana",
        "color": "Yellow",
        "hasSeeds": false,
        "averageWeightGrams": 118
      },
      {
        "name": "Orange",
        "color": "Orange",
        "hasSeeds": true,
        "averageWeightGrams": 131
      },
      {
        "name": "Blueberry",
        "color": "Blue",
        "hasSeeds": true,
        "averageWeightGrams": 0.5
      },
      {
        "name": "Pineapple",
        "color": "Brown/Yellow",
        "hasSeeds": false,
        "averageWeightGrams": 905
      }
    ]
  }
//creating another variable that grabs "fruit" object data
  const fruitsArray = data.fruits;

  //looping through each fruit from 0
const container = document.getElementById ("fruitContainer");
for (let i=0; i < fruitsArray.length; i ++)
 {const fruit = fruitsArray[i];
const p = document.createElement("p");

//setting up the paragraph for the html page
p.textContent = `Name: ${fruit.name}, Color: ${fruit.color}, Weight ${fruit.averageWeightGrams}g`;

container.appendChild(p);

}
