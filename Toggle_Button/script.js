let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let icon = document.querySelector(".btn-icon");

function store(value){
    localStorage.setItem("darkmode",value);
}

function load (){
    let darkmode = localStorage.getItem("darkmode");
    if(!darkmode){
        store(false);
    }
    else if (darkmode == "true") {
        body.classList.add("darkmode");
        icon.classList.add("fa-moon");
    } 
    else if (darkmode == "false"){
        icon.classList.add("fa-sun");
    }
}load();

btn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    icon.classList.add("animate");
    store(body.classList.contains("darkmode"));

    if (body.classList.contains("darkmode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }
    else {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    }
    setTimeout(() => {
        icon.classList.remove("animate");
    }, 500)

})
