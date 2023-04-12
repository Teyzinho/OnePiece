
function startAnimation(){
    var element = document.getElementById("luffy");
    element.classList.add("startAnimation");

    var element = document.getElementById("luffypngHover");
    element.classList.add("startAnimation");

    setTimeout(function(){
        var element = document.getElementById("luffy");
        element.classList.remove('startAnimation');
        console.log("oi");
    }, 2000);

    setTimeout(function(){
        var element = document.getElementById("luffypngHover");
        element.classList.remove('startAnimation');
    }, 2000);
}

function returnAnimation(){
    var element = document.getElementById("luffy");
    element.classList.add("returnAnimation");

    var element = document.getElementById("luffypngHover");
    element.classList.add("returnAnimation");

    setTimeout(function (){
        var element = document.getElementById("luffy");
        element.classList.remove('returnAnimation');
        console.log("oi");
    }, 2000);

    setTimeout(function (){
        var element = document.getElementById("luffypngHover");
        element.classList.remove('returnAnimation');
    }, 2000);
}