// // Part 1: Refactoring Old Code
// // change cells to arrays, and it should be dynamic, another array to be a row


let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// // cell 1, 2,3,4 becomes 1 array
// let cells= []
// let str =""
// for (let i=0; i<=csv.length; i++){
//     // this will log each letter individually on a different line
//     // console.log(csv[i]);
//     let char = csv[i];
//     // console.log(char);
//     if(char===","){
//         cells.push(str) // [] id
//         str = "" // clears it so that the name can be a new thing
       
//         // i===csv.length is how we would say to 
//     } else if (char==="\n" || i===csv.length){
//         str+=char 
//         cells.push(char)
//         currentCell= 1
//     } else {
//       cells.push(str)
//     }
// }
// console.log(cells);

// WORKS 
let cells =[] // 4  6
let str =""

for (let i=0; i<=csv.length; i++){//i=3
    // this will log each letter individually on a different line
    let char = csv[i];
    if(char===","){
        cells.push(str) //[ ID , Name ]
        str = ""
    } else if (char==="\n" || i===csv.length){
        cells.push(str)
        console.log(cells)
        str=""
        cells =[]
    } else {
        str+= char //Name
    }
}



// //  ------------- easiest way to write it
// let rows2 = csv.split("\n") // list of strings - 5 rows

// for (let j=0; j<rows2.length; j++){
//     console.log(rows2[j])
//     let cells = rows2[j].split(",")
//     console.log(cells)
// }



// // Part 2: Expanding Functionality

// // Part 3: Transforming Data

// // Part 4: Sorting and Manipulating Data

// // Part 5: Full Circle