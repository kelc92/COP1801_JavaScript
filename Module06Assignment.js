// Constructor function to define a dog object
function Dog(name, breed, owner, show, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.owner = owner;
    this.show = show;
    this.mySound = mySound;
    this.canTalk = canTalk; // Property to indicate if the dog can talk

    // Method to generate a greeting message
    this.myGreeting = function() {
        // Conditional statement to determine if the dog can talk
        const talkAbility = this.canTalk ? "I can talk!" : "I cannot talk.";
        return `Hello, my name is ${this.name}. ` +
               `I don't bark, but I baby babble. ` +
               `I starred in ${this.show} as a ${this.breed} that lived with a farmer named ${this.owner} in the "middle of nowhere." ` +
               `My role in every episode was to save ${this.owner} from bad things that tried to take them away. ` +
               `${talkAbility}`; // Include whether the dog can talk or not
    };
}

// Create two new Dog objects using the constructor function
const dog1 = new Dog(
    "Scooby-Doo", // name
    "Great Dane", // breed
    "Shaggy Rogers", // owner
    "Scooby-Doo, Where Are You!", // TV show
    "Ruh-roh!", // mySound
    true // Scooby-Doo can talk
);

const dog2 = new Dog(
    "Spike", // name
    "Siberian Tiger Hound", // breed
    "Pickles Family", // owner
    "Rugrats", // TV show
    "I may not speak, but I love these babies!", // mySound
    false // Spike cannot talk
);

// Function to display all properties of a dog
function displayAllDogProperties(dog) {
    const propertiesArea = document.getElementById('dog-properties');
    let propertiesText = `<h2>Dog Properties:</h2>`;
    for (let prop in dog) {
        // Check if the property is not a function
        if (dog.hasOwnProperty(prop) && typeof dog[prop] !== 'function') {
            propertiesText += `<p><strong>${prop}:</strong> ${dog[prop]}</p>`;
        }
    }
    propertiesArea.innerHTML = propertiesText;
}

// Function to display the dog's greeting message
function displayGreeting(dog) {
    const greetingArea = document.getElementById('dog-greeting');
    const greetingMessage = dog.myGreeting();
    greetingArea.innerHTML = `<h2>Constructor Function:</h2><p>${greetingMessage}</p>`;
}

// Function to prompt the user to select a dog and display its information
function selectDog() {
    const selectedDogName = prompt("Select a dog by name: Scooby-Doo or Spike");
    let selectedDog;

    // Determine which dog to select based on user input
    if (selectedDogName === "Scooby-Doo") {
        selectedDog = dog1;
    } else if (selectedDogName === "Spike") {
        selectedDog = dog2;
    } else {
        alert("The selected dog does not exist.");
        return;
    }

    // Display all properties and the greeting message of the selected dog
    displayAllDogProperties(selectedDog);
    displayGreeting(selectedDog);
}

// Call the functions to display initial details on the webpage
selectDog();
