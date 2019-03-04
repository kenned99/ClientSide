var rest = require("./RestEasy.js")

rest.dbSetup(       //Must be called if you want to use mysql calls
    "localhost",    //Host
    "root",         //User
    "",         //Password
    "employees"     //Optionally databasedepartments

    )

rest.page("/", function(q) {
    return rest.file("index.html")


})      
    
rest.offerFile('index2.js')
rest.offerFile('style.css')

var x = ""

rest.page("/data.json", function(q) {
    return rest.file("data.json")
})
// rest.page("/departments", function() {
//     return rest.select("SELECT * FROM departments;")
// })
rest.page("/departments", function(q) {
    return q.select;
})
rest.page("/employees", function() {
    return rest.query("SELECT * FROM employees LIMIT 0, 19;")
})

rest.page("/" + x, function() {
    return rest.query("SELECT * FROM employees WHERE first_name = 'x' LIMIT 0,19;")
})

rest.page("/employee" + x, function() {
    return rest.query("SELECT employees.*, dept_emp.dept_no FROM employees INNER JOIN dept_emp ON dept_emp.emp_no = employees.emp_no WHERE dept_no =" + x + " LIMIT 0,19;")
}) 

rest.page("/insert", function() {
    return rest.query("INSERT INTO employees (emp_no, birth_date, first_name, last_name, gender, hire_date) VALUES (id, 'birthdate', 'firstname', 'lastname', 'f or m', 'hiredate');")
})


rest.start(8001)