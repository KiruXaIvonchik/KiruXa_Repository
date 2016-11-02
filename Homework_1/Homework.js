/**
 * Created by kiril on 01.11.2016.
 */
class User {
    constructor(_fname, _lname, _age, _mail, _imag){
        this.fname = _fname;
        this.lname = _lname;
        this.age = _age;
        this.mail = _mail;
        this.imag = _imag;
    }

    toString(){
        return this.fname + " " + this.lname + " " + this.age + " " + this.mail;
    }
}

var  arrUser = [];

function btnSendClick(){
    let data = {};
    data.fname = document.getElementById("fname").value;
    data.lname = document.getElementById("lname").value;
    data.age = document.getElementById("age").value;
    data.imag = document.getElementById("imag").value;
    data.mail = document.getElementById("mail").value;

    if(data.fname != "" && data.lname != "" && data.age > 0 && data.age<156 && data.mail !=""){
        arrUser.push(new User(data.fname, data.lname, data.age, data.mail, data.imag));
        console.log("User addded");
    } else {
        console.log("Error");
    }
}


function btnPrintClick(){
    clearPage();
    let body = document.body;
    let contects = "<div>\n";
    for (let i = 0; i< arrUser.length; i++){
        contects += "<p>" + (i+1) + " " + arrUser[i].toString() + "</p>"+"<br>";
        contects += "<img src = '" + arrUser[i].imag + "' width='200px'>"
    }

    contects += "</div>";

    body.innerHTML = contects;
}

function clearPage(){
    document.body.innerHTML = "";
}