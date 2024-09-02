// Function checking if service quality is an accepted value
function isValidServiceQuality(quality) {
    const validQualities = ['great', 'okay', 'poor'];
    return validQualities.includes(quality.toLowerCase());
}

// Function verifying if a value between $5.00 and $500.00 was entered
function isValidServiceAmount(amount) {
    const numAmount = parseFloat(amount);
    return !isNaN(numAmount) && numAmount >= 5.00 && numAmount <= 500.00;
}

// Function to calculate the tip using user input regarding service quality
function calculateTip(amount, quality) {
    let percentage;
    switch (quality.toLowerCase()) { // Switch case used for readability and maintenance purposes
        case 'great':
            percentage = 0.20; // represents percentage
            break;
        case 'okay':
            percentage = 0.15; // represents percentage
            break;
        case 'poor':
            percentage = 0.10; // represents percentage
            break;
        default:
            throw new Error('Invalid service quality'); // feedback if invalid value entered
    }
    return amount * percentage; // Returning the value after tip calculation
}

// Main function of the script; user prompt
function main() {
    const serviceAmount = prompt('Enter the dollar amount of the service:');
    const serviceQuality = prompt('How would you describe the service? (Great, Okay, Poor):');

    // Validating the service amount
    if (!isValidServiceAmount(serviceAmount)) {
        alert('Invalid input. Please enter a value between $5.00 and $500.00.');
        return;
    }

    // Validating the service quality
    if (!isValidServiceQuality(serviceQuality)) {
        alert('Invalid input. Please enter "Great", "Okay", or "Poor".');
        return;
    }

    // Calculating the tip
    const amount = parseFloat(serviceAmount);
    const tipAmount = calculateTip(amount, serviceQuality);

    // Displaying the result
    alert(`Service amount: $${amount.toFixed(2)}\nService quality: ${serviceQuality}\nRecommended tip: $${tipAmount.toFixed(2)}`);
}

main();
