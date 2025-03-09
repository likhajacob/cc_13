// Task 2 - Adding employee cards dynamically
function addEmployee(name, position) {

    // Create a new element
     // container div
    const container = document.getElementById('employeeContainer');
    // new div element
    const employee = document.createElement('div'); 
    // Add a class to the div
    employee.classList.add('employee-card'); 

    // Create a new h4 element
    const cardName = document.createElement('h4'); 
    cardName.textContent = name;

    // Create a new p element
    const cardPosition = document.createElement('p'); // Create a new p element
    cardPosition.textContent = position; // Set the position of the p elementq

    // Create a new button element
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Employee'; 
    removeButton.classList.add('remove-Button'); 

    // Add event listener to remove button
    removeButton.addEventListener('click', () => { 
        container.removeChild(employee); 
    });

    // Append the elements to the container
    employee.appendChild(cardName);
    employee.appendChild(cardPosition);
    employee.appendChild(removeButton); 
// Append div to container
    container.appendChild(employee);
}
// Call the function to add employee cards
addEmployee('Krupa Jacob', 'Business Analyst at Sephora'); 
addEmployee('Likha Jacob', 'Advisor at HCC');
addEmployee('Betty Figi', 'Nurse at TGH');

