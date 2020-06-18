function myFunction() {
    alert("YA MOM")
}

function enterData() {
    var name;
    name = document.getElementById("uname").value;
    if (name + "file.html"){
        window.open(name+"file.html");
    }
    else {
        var blank = name;
        saveAs(blank, name + "file.txt");
    }
}
//dpenebac.gihub.io