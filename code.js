function load(){
const xhttp=new XMLHttpRequest();

xhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
        // document.getElementById("demo").innerHTML=this.responseText;
       
        let obj=JSON.parse(this.responseText);
        let text=""+"<table>"+"<caption>"+"Grocery Items"+"</caption>"+"<tr>"+"<th>"+"Serial No"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Quantity"+"</th>"+"<th>"+"Unit"+"</th>"+"<th>"+"Departments"+"</th>"+"<th>"+"Notes"+"</th>"+"</tr>";
        for(let x in obj)
        {
            text+="<tr>"+"<td>"+obj[x].serial_no+"</td>"+"<td>"+obj[x].name+"</td>"+"<td>"+obj[x].quantity+"</td>"+"<td>"+obj[x].unit+"</td>"+"<td>"+obj[x].department+"</td>"+"<td>"+obj[x].Notes+"</td>"+"</tr>";
        } text+="</table>";
        document.getElementById("demo").innerHTML=text;
    }
}
xhttp.open("GET","word.json",true);
xhttp.send();
}














