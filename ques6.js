// creatimg array of Ocjects
let studentsDetails= [ 
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 } 
];

function processStudents(){  //cratimg function
// using filter () to create a new array 
let  filteredData = studentsDetails.filter(studentsDetails =>studentsDetails.marks>60);
// sorted filteredData in descending order
let  sortedData = filteredData.sort((a, b) => a.marks - b.marks); 
// using map() to extract the Namestudents of sorteddata
let  result = sortedData.map(studentsDetails => studentsDetails.name);
    return result; // retuning the array of sortedData
}console.log(processStudents(studentsDetails))// calling function