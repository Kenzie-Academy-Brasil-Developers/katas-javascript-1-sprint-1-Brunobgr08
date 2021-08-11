function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/
   let num = [];
   for ( let count = 1; count <=20; count++ ){
     num.push(count);
   }
    return num;
}

//call function oneThroughTwenty
console.log(oneThroughTwenty());

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
   let num = [];
   for ( let count = 2; count <=20; count+=2 ){
     num.push(count);
   }
    return num;
}

//call function evensToTwenty
console.log(evensToTwenty());

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let num = [];
   for ( let count = 1; count <=20; count+=2 ){
     num.push(count);
   }
    return num;
}

//call function oddsToTwenty
console.log(oddsToTwenty());

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let num = [];
  let count = 5;
   do{
     num.push(count);
     count+=5;
   } while ( count <= 100 );
    return num;
}

//call function multiplesOfFive
console.log(multiplesOfFive());

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let num = [];

   for ( let count = 1; count <=100; count++){
     if ((count*count) <= 100){
       num.push(count*count);
     }
   }
    return num;
}

//call function squareNumbers
console.log(squareNumbers());

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let num = [];
   for ( let count = 20; count > 0; count-- ){
     num.push(count);
   }
    return num;
}

//call function countingBackwards
console.log(countingBackwards());

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let num = [];
   for ( let count = 20; count > 0; count-=2 ){
     num.push(count);
   }
    return num;
}

//call function evenNumbersBackwards
console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let num = [];
   for ( let count = 19; count > 0; count-=2 ){
     num.push(count);
   }
    return num;
}

//call function oddNumbersBackwards
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let num = [];
  let count = 100;
   do{
     num.push(count);
     count-=5;
   } while ( count > 0 );
    return num;
}

//call function multiplesOfFiveBackwards
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  let num = [];

   for ( let count = 100; count > 0; count-- ){
     if ( ( count * count ) <= 100 ){
       num.push(count*count);
   }
  }
    return num;
}

//call function squareNumbersBackwards
console.log(squareNumbersBackwards());
