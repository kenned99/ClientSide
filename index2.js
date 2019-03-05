

$(document).ready(function () {
        
        
        
        $('#dep').click(function(){
                var query = "SELECT * FROM departments order by dept_no"
                $.getJSON("/departments?select="+ encodeURIComponent(query)  , function(data){
                        table = ""
                        $.each(data, function(key, value){

                                table += "<tr>"
                                table += "<td><button class = 'dept_button' id ='"+value["dept_no"] +"'>" + value["dept_name"]+ "</button></td>"
                                
                                table += "<tr>"
                        })
                        
                        $('#deptList').html(table)
                        
                        console.log(table)

                        $('.dept_button').click ( function( ){
                                
                                i = 20;
                                
                                tablename = $(this).attr("id");
                                var query ="SELECT employees.*, dept_emp.dept_no FROM employees INNER JOIN dept_emp ON dept_emp.emp_no = employees.emp_no WHERE dept_no ='" + tablename+ "' LIMIT 0,"+i+";"
                                $.getJSON("/employees?select="+ encodeURIComponent(query)  , function(data){
                                        table = "<table>";
                                        
                                        $.each (data, function(key,value){
                                                
                                                table += "<tr><td>"+ value['first_name']+ "</td><td>" + value ['last_name'] 
                                                + "</td><td>" + value['gender']+ "</td><td>" + value['birth_date'] + "</td><td>" + value['hire_date']+"</td></tr>" ;
                                                
                                                
                                        })
                                        table += "</table><button id = 'showMore'>show more</button>"
                                        
                                        $('#employees').html(table)
                                        
                                        $('#showMore').click(showmorebtn)
                                })
                        })
                });
        })

        $('#insertbtn').click( function(event){
                event.preventDefault();
                console.log("hello")
                console.log($("#dept_input").val())
                $.ajax({
                        global: false,
                        type: 'POST',
                        url: '/insert',
                        dataType: 'html',
                        data: {
                            deptname: $("#dept_input").val()
                            
                        },
                        success: function (result) {
                            console.log(result);
                        },
                        error: function (request, status, error) {
                            serviceError();
                        }
                    });
                });
                $('#searchthis').click(function(){
                        i = 20
                        event.preventDefault();
                        var query = "SELECT * FROM employees WHERE first_name REGEXP '" + $("#searchInput").val() + "'  || last_name REGEXP '" + $("#searchInput").val() + "' LIMIT 0,"+20+";"
                        $.getJSON("/search?select="+ encodeURIComponent(query), function(data){
                                console.log(data)
                        table = "<table>"
                        $.each(data, function(key, value) {
                                table += "<tr><td>"+ value['first_name']+ "</td><td>" + value ['last_name'] 
                                + "</td><td>" + value['gender']+ "</td><td>" + value['birth_date'] + "</td><td>" + value['hire_date']+"</td></tr>"
                        })
                        table += "</table><button id='showmoresearchbtn'>show more</button>"
                        $('#employees').html(table)
                        $('#showmorebtn').click(showmoresearch)
                        console.log(table)
                });
        });     
        
        
                
});
var showmoresearch = function() {
        i = i + 20
        var query ="SELECT * FROM employees WHERE first_name REGEXP '" + $("#searchInput").val() + "'  || last_name REGEXP '" + $("#searchInput").val() + "' LIMIT 0,"+i+";"
        $.getJSON("/search?select="+ encodeURIComponent(query), function(data) {
                table = "<table>"

                $.each (data, function(key,value) {
                        table += "<tr><td>"+ value['first_name']+ "</td><td>" + value ['last_name'] 
                        + "</td><td>" + value['gender']+ "</td><td>" + value['birth_date'] + "</td><td>" + value['hire_date']+"</td></tr>"
                })
                table += "</table>";

                table += "</table><button id='showmoreseachbtn'>show more</button>"

                $('#employees').html(table)
                $('#showmorebtn').click(showmoresearch)
        })
}



var showmorebtn = function( ){
        i = i + 20
        console.log(i)
        var query ="SELECT employees.*, dept_emp.dept_no FROM employees INNER JOIN dept_emp ON dept_emp.emp_no = employees.emp_no WHERE dept_no ='" + tablename + "' LIMIT 0,"+i+";"
        $.getJSON("/employees?select="+ encodeURIComponent(query)  , function(data){
                table = "<table>";
                
                $.each (data, function(key,value){
                        
                        table += "<tr><td>"+ value['first_name']+ "</td><td>" + value ['last_name'] +
                         "</td><td>" + value['gender']+ "</td><td>" + value['birth_date'] + "</td><td>" + value['hire_date']+"</td></tr>" ;
                        
                        
                })
                table += "</table>";

                table += "</table><button id = 'showMore'>show more</button>"
                
                $('#employees').html(table)
                $('#showMore').click(showmorebtn)
                
        });

}
