console.log("script loaded")

function hide(element) {
    var element = document.querySelector(".leftBot")
    // console.log("element")
    element.remove()
}

function addclick(element) {
    console.log("addclick ran");
    var score = document.querySelector("#ninjaScore");
    score.innerHTML = Number(score.innerHTML)+1;
    console.log(score)
}

function addclick2(element) {
    console.log("addclick2 ran")
    var score =document.querySelector("#pirateScore")
    score.innerHTML = Number(score.innerHTML)+1;
    console.log(score)
}

function message() {
    alert("The Ninjas have won!")
}

setTimeout(message, 13000)
