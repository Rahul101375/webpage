const hi1 =document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');

let play='false';
let newWords = "";
let randWords = "";
let sWords = ['Rahul','Nitesh','Deepak','SRK'];

const creteNewWords = () => {
    let ranNum =Math.floor(Math.random()*sWords.length);
    let newTempSwords =sWords[ranNum];
    return newTempSwords;
}
 
const scrambleWords = (arr) =>{
    for(let i=arr.length-1; i>0; i--){
        let temp = arr[i];
        console.log(temp);
        let j =Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
btn.addEventListener('click', function()
{
    if(!play)
    { 
        play = true;
        btn.innerHTML ="Guess";
        guess.classList.toggle('hidden');
        newWords = creteNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        hi1.innerHTML=`Guess The Word: ${randWords}`;
    }
    else
    {
        let tempWord = guess.value;
        if(tempWord === newWords)
        {
            play = false;
            hi1.innerHTML =`Awesome It's Correct. It is ${newWords}`;
            btn.innerHTML ="Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else
        {
            console.log(`Incorrect`)
            hi1.innerHTML =`Sorry Babu. Try Again ${randWords}`;
        }
    }
})