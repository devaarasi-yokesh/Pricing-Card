document.addEventListener('DOMContentLoaded',() =>{
    var checkBox = document.querySelector('input[type="checkbox"]')
    var container = document.querySelectorAll("h3");
console.log(container)
checkBox.addEventListener('change',()=>{
    if(checkBox.checked){
        console.log("yes")
        
            container[0].textContent = "$348";
            container[1].textContent = "$1068";
    }
    else{
        console.log("not")
        container[0].textContent = "$29";
        container[1].textContent = "$89";
    }
})
});