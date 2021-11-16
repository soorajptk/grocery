function load(){
    const xhttp=new XMLHttpRequest();
    
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            let obj=JSON.parse(this.responseText);
            let text=""+"<table>"+"<caption>"+"Grocery Items"+"</caption>"+"<tr>"+"<th>"+"Serial No"+"</th>"+"<th>"+"Name"+"</th>"+"<th>"+"Quantity"+"</th>"+"<th>"+"Unit"+"</th>"+"<th>"+"Departments"+"</th>"+"<th>"+"Notes"+"</th>"+"<th>"+"status"+"</th>"+"</tr>";
            for(let x in obj)
            {
                text+="<tr>"+"<td>"+obj[x].serial_no+"</td>"+"<td>"+obj[x].name+"</td>"+"<td>"+obj[x].quantity+"</td>"+"<td>"+obj[x].unit+"</td>"+"<td>"+obj[x].department+"</td>"+"<td>"+obj[x].Notes+"</td>"+"<td>"+obj[x].status+"</td>"+"</tr>";
            } text+="</table>";
            document.getElementById("demo").innerHTML=text;
        }
    
    }
    xhttp.open("GET","word.json",true);
    xhttp.send();
    }
    
    function delt(obj){
        let x=document.getElementById("carrots")
        if(obj.checked){
        
            x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        
            x.innerHTML=x.textContent;
    
    
        }
     }
    
    
     function delt1(obj){
        let x=document.getElementById("cucumbar")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }
    
    
     function delt2(obj){
        let x=document.getElementById("tomato")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }
    
     
     function delt3(obj){
        let x=document.getElementById("orange")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }
    
    
     function delt4(obj){
        let x=document.getElementById("apple")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }
     
     function delt5(obj){
        let x=document.getElementById("mango")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }
    
     
     function delt6(obj){
        let x=document.getElementById("milk")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }
    
    
     
     function delt7(obj){
        let x=document.getElementById("yogurt")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }
     function delt8(obj){
        let x=document.getElementById("salt")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }
     function delt9(obj){
        let x=document.getElementById("pepper")
        if(obj.checked){
        x.innerHTML="<del>"+x.textContent+"</del>";
    
        }else{
        x.innerHTML=x.textContent;
    
    
        }
     }