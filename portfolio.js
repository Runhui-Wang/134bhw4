function read_projects(){
    let select_value = document.getElementById("pjs").value;
    if(select_value == "c++ project"){
        document.getElementById("c++").style.display = "initial";
        document.getElementById("c").style.display = "none";
        document.getElementById("python").style.display = "none";
        document.getElementById("matlab").style.display = "none";
    }
    else if(select_value == "c project"){
        document.getElementById("c++").style.display = "none";
        document.getElementById("c").style.display = "initial";
        document.getElementById("python").style.display = "none";
        document.getElementById("matlab").style.display = "none";
    }
    else if(select_value == "Python project"){
        document.getElementById("c++").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("python").style.display = "initial";
        document.getElementById("matlab").style.display = "none";
    }

    else if(select_value == "MatLab project"){
        document.getElementById("c++").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("python").style.display = "none";
        document.getElementById("matlab").style.display = "initial";
    }
    else{
        document.getElementById("c++").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("python").style.display = "none";
        document.getElementById("matlab").style.display = "initial";
    }
}
function handleClick() {
    read_projects();
}
