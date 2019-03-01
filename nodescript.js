var rest = require("./RestEasy.js")

rest.dbSetup(       //Must be called if you want to use mysql calls
    "localhost",    //Host
    "node",         //User
    "6969",      //Password
    "employees"          //Optionally database

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
    return rest.query("SELECT * FROM employees LIMIT 0, 19")
})



/*
rest.page("/view", function() {
    return "SELECT * FROM names"
})

rest.page("/query", function() {
    return rest.query("INSERT INTO names(name) VALUES ('Lisa')")
})

rest.page("/file", function() {
    return rest.file("index.html")
})*/

rest.start(8001)