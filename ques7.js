//creating a Array of strings
let object= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
//using reduce() to grouping the elements categories and count
let result= object.reduce((acc,value)=>{
    if(acc[value]){
        acc[value]+=1; // increment counting
    }
    else{
      acc[value]=1;// initialize counting
    } return acc; // Returning the result of object.
},{});  // Initial value is an empty object
console.log(result)
