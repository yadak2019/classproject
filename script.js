function show(){
    element = document.getElementById("shows")
    element.style.width = "100%"
    element.style.height = "100%"
    
}
function cancle(){
    element = document.getElementById("shows")
    element.style.width = "0"
    element.style.height = "0"
}

data = [
    {
        image:"assets/html.jpg",
        text:"Learn HTML"
    },
    {
        image:"assets/css.png",
        text:"Learn CSS"
    },
    {
        image:"assets/js.png",
        text:"Learn Javascript"
    },
    {
        image:"assets/html.jpg",
        text:"Learn Yadak"
    },
    {
        image:"assets/html.jpg",
        text:"Learn"
    },
    {
        image:"assets/html.jpg",
        text:"Learn Yadak"
    }
]

function dispayall(){
    data.map((x)=>{
        document.getElementById("course1").insertAdjacentHTML("beforeend",`<div class="program1">
        <img width="300px" height="300px" src=${x.image} alt="">
        <div id="name">${x.text}</div>
        
    </div>`)
    })
}
dispayall()