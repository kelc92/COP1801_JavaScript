	// 1. Counting from 0 to 10 and checking if the number is odd or even
        let output = '';
        for (let i = 0; i <= 10; i++) {  // if else statement
            if (i % 2 === 0) {
                output += `Count ${i} is even<br>`;
            } else {
                output += `Count ${i} is odd<br>`;
            }
        }

       
        document.getElementById('output').innerHTML = output; // Display results to the webpage

     // 2. Ask the user for a number between 5 and 20 and display loop counter using a Do While Loop. (MozDevNet, n.d.)
        let myNum; //Store user input number in myNum variable
        do {
            myNum = parseInt(prompt("Enter a number between 5 and 20:"));
        } while (isNaN(myNum) || myNum < 5 || myNum > 20);

        let counter = 1; // Starting counter at 1
        let counterOutput = '<br>Counter results:<br>';
        do {
            counterOutput += `${counter}<br>`;
            counter++;
        } while (counter <= myNum);

       
        document.getElementById('output').innerHTML += counterOutput; // Display the counter results on the webpage

        
        const subjects = [ // 3. Array of subjects. (W3Schools, n.d.)
            'Accounting',
            'Algebra',
            'Programming',
            'Art',
            'Data Analytics'
        ];

        
        let subjectsOutput = '<br>Subjects:<br>';// Display array values in a readable format forEach(). (GeeksforGeeks, 2024)
        subjects.forEach(subject => {
            subjectsOutput += `${subject}<br>`;
        });

        
        const subjectsCommaSeparated = subjects.join(', '); // Display array values separated by commas using one statement
        subjectsOutput += `<br>Subjects (comma separated): ${subjectsCommaSeparated}`;

        
        document.getElementById('output').innerHTML += subjectsOutput;
		
		console.log("You can never leave");
  
  // References used for help
  // JavaScript Arrays. W3Schools . (n.d.). https://www.w3schools.com/js/js_arrays.asp 
  // GeeksforGeeks. (2024, July 9). JavaScript Array Foreach() Method. https://www.geeksforgeeks.org/javascript-array-foreach-method/ 
  // MozDevNet. (n.d.). Do...while - JavaScript. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while 