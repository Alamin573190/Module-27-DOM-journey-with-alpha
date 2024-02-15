// function play() {
    // console.log('play started now')
    // const homeSection =document.getElementById('home');
    // homeSection.classList.add('hidden');

    // play ground
//     const playgroundSection =document.getElementById('play-ground');
//    playgroundSection.classList.remove('hidden');
//     };
function handleKeyboardButtonPress(event){
    const playerPressed =event.key;
    console.log(playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet)

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you got a poin')
        console.log('you have press currectly',expectedAlphabet);
        // update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // increase score
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;



        // start a new round
        removeBackgroundElementById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('right key press');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;


    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    // step 1 genarate a random alphabet
    const alphabet = getARandonAlphabet();
    console.log(alphabet);

    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundElementById(alphabet);
}

function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}

