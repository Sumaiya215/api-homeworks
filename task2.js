function tellJoke(){
    console.log("Why don't scientists trust atoms? Because they make up everything");
}

const jokeInterval = setInterval(tellJoke,2000);

setTimeout(()=>{
    clearInterval(jokeInterval);
    console.log("No more jokes!")
},10000);

tellJoke();