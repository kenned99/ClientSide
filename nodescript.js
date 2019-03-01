var rest = require("./RestEasy.js")

rest.dbSetup(       //Must be called if you want to use mysql calls
    "localhost",    //Host
    "node",         //User
    "6969",         //Password
    "employees"     //Optionally database

    )

rest.page("/", function(q) {
    return rest.file("index.html")


})      
    
rest.offerFile('index2.js')
rest.offerFile('style.css')


rest.page("/data.json", function(q) {
    return rest.file("data.json")
})
rest.page("/departments", function() {
    return rest.query("SELECT * FROM departments;")
})

rest.page("/employees", function() {
    return rest.query("SELECT * FROM employees LIMIT 0, 19;")
})

rest.page("/x", function() {
    return rest.query("SELECT * FROM employees WHERE first_name = 'x' LIMIT 0,19;")
})

rest.page("/employee 'dept_no'", function() {
    return rest.query("SELECT employees.*, dept_emp.dept_no FROM employees INNER JOIN dept_emp ON dept_emp.emp_no = employees.emp_no WHERE dept_no = 'd005' LIMIT 0,19;")
})

rest.page("/", function() {

})

rest.start(8001)