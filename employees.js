////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a new class called `Employee`.
    Make sure to call your constructor, and
    require these 2 parameters: name, shifts.

    Create a method on the class called
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

class Employee {
    constructor(name, shifts) {
        this.name = name;
        this.shifts = shifts;
    }

    getSchedule() {
        console.log(`${this.name} works on ${this.shifts}.`);
    }

}



/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

let empOne = new Employee('Jess', 'weekday mornings, weekday afternoons');
// console.log(empOne.shifts);


/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

empOne.getSchedule();


/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the
    spread operator or reassign it using
    dot or bracket notation.
*/

let empTwo = {...empOne, name: 'Nick'}
console.log(empTwo);



//////////////////PROBLEM 2////////////////////
/*
    Write a class called Manager that *extends*
    the Employee class. In the constructor,
    make sure you require all of the parameters
    from the Employee class as well as 1
    new one: employees, which will be an array of
    employees that report to this manager.
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into
    the employees array.
*/

class Manager extends Employee {
    constructor(name, shifts, employees) {
        super(name, shifts)

        this.employees = employees;
    }

    getEmployees() {
        let employeeStr = '';

        //establishing variable to make code below more readable
        let numOfEmployees = this.employees.length;

        //improves the output appearance
        //if only one employee, nothing special about string, returning single employee
        if (numOfEmployees === 1) {
            employeeStr = this.employees[0];
        //if 2 employees, add an 'and' between the two
        } else if (numOfEmployees === 2) {
            employeeStr = `${this.employees[0]} and ${this.employees[1]}`;
        //if more than two handled below
        } else {
            this.employees.forEach((employee, idx) => {
                //if last one, separate the 2nd to last one and last one with 'and'
                if (idx === numOfEmployees - 1) {
                    employeeStr += `and ${employee}`;
                //otherwise separate names with a comma until you get to the last one which will trigger above if statement
                } else {
                    employeeStr += `${employee}, `;
                }
            });
        }


        console.log(`${this.name} manages ${employeeStr}`);
    }

    addEmployee(emp) {
        this.employees.push(emp);
    }
}



/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

let manager = new Manager('Winston', 'weekday mornings, weekday afternoons', ['Cece', 'Schmidt'])
console.log(manager.employees)

/*
    Call the `getEmployees` method on the
    `manager` object.
*/

manager.getEmployees();

/*
    Call the `addEmployee` method on the
    `manager` object passing in the string
    'Coach' or whatever name you'd like.
*/

manager.addEmployee('Coach')

/*
    Call the `getEmployees` method on the
    `manager` object again to confirm
    that an employee was added.
*/

manager.getEmployees();
