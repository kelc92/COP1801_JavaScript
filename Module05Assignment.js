// Create an object literal myDog
const myDog = { 
    name: "Courage", // Properties related to Courage.
    breed: "Beagle", // No breed description, so Beagle was chosen
    owner: "Eustace and Muriel",
    show: "Courage the Cowardly Dog",
    // mySound property
    mySound: "I might jabber, jumble, and chatter my words when I am scared or nervous, but I always do whatever it takes to save Muriel and Eustace.",

    describeDog: function() { // Function to display description and message
        return `Name: ${this.name}<br>` +
               `Breed: ${this.breed}<br>` +
               `Owner: ${this.owner}<br>` +
               `Show: ${this.show}<br>` +
               `Sound: ${this.mySound}`;
    }
};

// Function to display dog details in the console and on the webpage
function displayDogDetails() {
    // Get the container element to display the information on the webpage
    const displayArea = document.getElementById('dog-info');
    
    // Construct the description
    const description = myDog.describeDog();
    
    // Display to console
    console.log("Object Literal:");
    console.log(description);
    
    // Display to webpage
    displayArea.innerHTML = `<h2>Object Literal:</h2><p>${description}</p>`;
}

// Simple constructor
function Dog(name, breed, owner, show, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.owner = owner;
    this.show = show;
    this.mySound = mySound;
    this.canTalk = canTalk; // new property
    
    this.myGreeting = function() { // Object method to display greeting
        return `Hello, my name is ${this.name}. ` +
               `I don't bark, but I baby babble. ` +
               `I starred in ${this.show} as a ${this.breed} that lived with a farmer named ${this.owner} in the "middle of nowhere." ` +
               `My role in every episode was to save ${this.owner} from bad things that tried to take them away.`;
    };
}

// Instantiate the Dog object using the constructor function
const myDogConst = new Dog(
    "Courage",
    "Beagle",
    "Eustace and Muriel",
    "Courage the Cowardly Dog",
    "I might jabber, jumble, and chatter my words when I am scared or nervous, but I always do whatever it takes to save Muriel and Eustace",
    true // Courage can talk
);

// Function to display constructor in the console and on the webpage
function displayGreeting() {
    // Get the container element to display the information on the webpage
    const greetingArea = document.getElementById('dog-greeting');
    
    // Obtain greeting message
    const greetingMessage = myDogConst.myGreeting();
    
    // Display to console
    console.log("\nConstructor Function:");
    console.log(greetingMessage);
    
    // Display to webpage
    greetingArea.innerHTML = `<h2>Constructor Function:</h2><p>${greetingMessage}</p>`;
}

// Calling the functions to display details on the webpage
displayDogDetails();
displayGreeting();
