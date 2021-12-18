let maximumInput = document.getElementById('maximum');
let startButton = document.getElementById('start');
let chance = document.getElementById('chance');
let guessInput = document.getElementById('guess-number');
let guessButton = document.getElementById('guess-button');
let stage1 = document.getElementById('stage1');
let stage2 = document.getElementById('stage2');
let buttonWarning = document.getElementById('buttonWarning');



let targetNumber , totalChance , maximumNumber ;

startButton.addEventListener('click' , startGame);
function startGame(){
    maximumNumber = Number(maximumInput.value);
    if(maximumNumber > 10){
        targetNumber = Math.floor(Math.random() * (maximumNumber + 1));
        totalChance = Math.floor(Math.log2(maximumNumber)) + 1;
        chance.innerHTML = totalChance ;
        stage1.classList.toggle('box__display_non');
        stage2.classList.toggle('box__display_non');
    }
    else if(maximumNumber < 10){
        let p = document.getElementById('tagP') ;
        p.outerHTML = '<p class="red" id="tagP">عدد وارد شده باید بزرگ تر از 10 باشد</p>';
    }
    else{
        let p = document.getElementById('tagP') ;
        p.outerHTML = '<p class="red" id="tagP">لطفا یک عدد وارد کنید</p>';
    }
    
}

guessButton.addEventListener('click' , game);
function game(){
    let yourGuess = Number(guessInput.value) ;
    if (yourGuess==targetNumber){
        stage2.innerHTML = '<p class="green">تبریک ! شما موفق شدید</p>';
        return;
    }else if(yourGuess > targetNumber){
        let status = document.getElementById('status');
        status.innerHTML += `<span class="red">${yourGuess}</span>  ` ;
        guessInput.value = " ";
    }else{
        let status = document.getElementById('status');
        status.innerHTML += `<span class="blue">${yourGuess}</span>  ` ;
        guessInput.value = " ";
    }
    let remaainingChances = Number(chance.textContent);
    remaainingChances--;
    if(remaainingChances > 0){
        chance.innerHTML=remaainingChances;
    }else if(remaainingChances == 0){
        stage2.innerHTML = '<p class="red">فرصت شما به پایان رسید!</p>'
    }

}

