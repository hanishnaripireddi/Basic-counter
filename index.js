var i=0;

function increment(){
    console.log("incremented");
    i=i+1
    document.getElementById("count").innerText = i;
}

function clearoutput(){
    i=0
    document.getElementById("count").innerText = i;
}


let saveEl=document.getElementById("saved")
function savefinal(){
    let countStr= i+", "
    saveEl.textContent += countStr
    i=0
}