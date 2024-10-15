function printMessage(){
    setTimeout(() =>{
        console.log('Asynchronous message printed');
    }, 5000 );
    
}
printMessage();
//2. 
function delayGreeting(name,delayTime){
    setTimeout(()=>{
        console.log(`Hello ${name}!`);
    },delayTime);
}

delayGreeting('Alice',2000);