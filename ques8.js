let employeesPerformance=[
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
]
function evaluationSystem(){
let fiteredData=employeesPerformance.filter(employeesPerformance=>employeesPerformance.tasksCompleted>5);
let employeesName = fiteredData.map(employeesPerformance=>{
    if(employeesPerformance.rating>4.5){
        return "Exellent"
    } else if(employeesPerformance.rating>3){
        return"Good"
    } else{
        return "Needs Improvement"
    }
});
    return  employeesName;
}
console.log(evaluationSystem(employeesPerformance))