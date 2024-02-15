// function play() {
    // console.log('play started now')
    // const homeSection =document.getElementById('home');
    // homeSection.classList.add('hidden');

    // play ground
//     const playgroundSection =document.getElementById('play-ground');
//    playgroundSection.classList.remove('hidden');
//     };

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

