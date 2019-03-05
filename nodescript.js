var rest = require("./RestEasy.js")

rest.dbSetup(       //Must be called if you want to use mysql calls
    "localhost",    //Host
    "root",         //User
    "",         //Password
    "employees"     //Optionally databasedepartments

)

rest.page("/", function (q) {
    return rest.file("index.html")


})

rest.offerFile('index2.js')
rest.offerFile('style.css')



rest.page("/departments", function (q) {
    return q.select;
})
rest.page("/employees", function (q) {
    return q.select;
})

rest.page("/search", function (q) {
    return q.select;
})



rest.page("/insert", function (q) {

    return rest.query("INSERT INTO departments(dept_no,dept_name) VALUES ('d010','" + q.deptname + "' );")

})


rest.start(8001)