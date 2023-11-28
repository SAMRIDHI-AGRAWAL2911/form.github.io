function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function validateform(){
    var returnval=true;
    var name=document.forms['myform']['fname'].value;
    console.log(name);
    if((name.length<5)&&(name.length>50)){
        seterror("name","length of name is too short");
        returnval=false;
    }
}
