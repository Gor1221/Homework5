function findBiggestNegative(array){
  var currentMinus = 1;
   if(typeof array[0] !== "object"){
     console.log("Invalid Argument");
     return;
   }
  
  for(let i= 0; i<array.length ; ++i ){
    if(Math.min(...array[i]) > 0){
      continue;
    }
    let currentMinusesArray= [];
    for(let j= 0; j<array[i].length ; ++j){
      if(array[i][j] < 0){
        currentMinusesArray.push(array[i][j]);
      }
    } 
    
    (currentMinusesArray.length < 1)? currentMinus *= 1 : currentMinus *= Math.max(...currentMinusesArray)  
  }
  console.log(currentMinus)
}
  
findBiggestNegative();


