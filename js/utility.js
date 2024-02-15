function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400');  
}

function getARandonAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwyxz'
    const alphabets = alphabetString.split('')
    // console.log(alphabets);
    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet=alphabets[index];
    console.log(index ,alphabet);
    return alphabet;
}