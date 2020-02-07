var food = document.getElementById('signup');

window.onclick = function(event){
    if(event.target == food){
        this.food.style.direction = 'none';
    }
}


var food1 = document.getElementById('login');


window.onclick = function(event) {
    if (event.target == food1) {
        modal.style.display = "none";
    }
}

