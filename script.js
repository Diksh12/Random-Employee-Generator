
const employees = [];

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const numberOfEmployees = Number(document.getElementById('numberOfEmployees').value);
    const companyName = document.getElementById('companyName').value;

    for (let i = 0; i < numberOfEmployees; i++) {
        const id = faker.random.number();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        const employee = new Employee(id, firstName, lastName, companyName);

        employees.push(employee);
    }

    document.getElementById('employees').innerHTML = employees.map((employee) => {
        return `
            <div>
                <p>Id: ${employee.id}</p>
                <p>First Name: ${employee.firstName}</p>
                <p>Last Name: ${employee.lastName}</p>
                <p>Email: ${employee.email}</p>
                <p>Company Name: ${companyName}</p>
            </div>
            <hr>
        `;
    }).join('');
});

class Employee {
    constructor(id, firstName, lastName, companyName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = `${firstName}.${lastName}@${companyName}.com`;
    }
}
