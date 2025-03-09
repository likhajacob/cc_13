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
    const cardPosition = document.createElement('p');
    //Set the position of p elementq
    cardPosition.textContent = position;
    //Create a new button element
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Employee'; 
    removeButton.classList.add('remove-Button'); 
    //Add event listener to remove button
    removeButton.addEventListener('click', () => { 
        container.removeChild(employee); 
    });
    //Append the elements to the container
    employee.appendChild(cardName);
    employee.appendChild(cardPosition);
    employee.appendChild(removeButton); 
//Append div to container
    container.appendChild(employee);
}
//Call the function to add employee cards
addEmployee('Krupa Jacob', 'Business Analyst at Sephora'); 
addEmployee('Likha Jacob', 'Advisor at HCC');
addEmployee('Betty Figi', 'Nurse at TGH');
//Task 3: Converting NodeLists to Arrays for Bulk Updates
function updateEmployeeCards() {
    // Select all elements with the "employeeCard" class
    const employeeCards = document.querySelectorAll('.employeeCard');
    Array.from(employeeCards).forEach(card => {
      card.style.border = '1px solid black';
      card.style.backgroundColor = 'pink';
      card.style.margin = '10px';
    });
} 
updateEmployeeCards();
