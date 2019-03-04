

$(document).ready(function () {
        
        
        $('#dep').click(function(){
                var query = "SELECT * FROM departments order by dept_no"
                $.getJSON("/departments?select="+ encodeURIComponent(query)  , function(data){
                        table = "";
                        $.each(data, function(key, value){
                                //alert(key + "----" + value)
                                //$.each(value, function(dep_num)
                                table += "<tr>"
                                table += "<td>" + value["dept_no"]+ "</td>" + "<td>" + value["dept_name"]+ "</td>"
                                
                                table += "<tr>"
                        })
                        //$('#deptList').html("<td>" + value["dept_no"]+ "</td>")   
                        $('#deptList').html(table)
                        
                        console.log(table)



                });

        })
});
