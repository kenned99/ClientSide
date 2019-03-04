

$(document).ready(function () {
        
        
        $('#dep').click(function(){
                var query = "SELECT * FROM departments order by dept_no"
                $.getJSON("/departments?select="+ encodeURIComponent(query)  , function(data){
                        table = "";
                        $.each(data, function(key, value){
                                //alert(key + "----" + value)
                                //$.each(value, function(dep_num)
                                table += "<tr>"
                                table += "<td><button class = 'dept_button' id ='"+value["dept_no"] +"'>" + value["dept_name"]+ "</button></td>"
                                
                                table += "<tr>"
                        })
                        //$('#deptList').html("<td>" + value["dept_no"]+ "</td>")   
                        $('#deptList').html(table)
                        
                        console.log(table)
                        //value["dept_no"]

                        $('.dept_button').click ( function( ){
                                alert($(this).attr("id"))

                                var query ="SELECT employees.*, dept_emp.dept_no FROM employees INNER JOIN dept_emp ON dept_emp.emp_no = employees.emp_no WHERE dept_no ='" + $(this).attr("id") + "' LIMIT 0,19;"
                                $.getJSON("/employees?select="+ encodeURIComponent(query)  , function(data){
                                        
                                        $.each (data, function(key,value){
                                                console.log(value["first_name"] +" "+ value["last_name"] );
                                        })
                                })


                        })

                });

        })
 
});
