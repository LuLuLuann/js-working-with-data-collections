// // Part 1: Refactoring Old Code
// // change cells to arrays, and it should be dynamic, another array to be a row
// Part 2: Expanding Functionality
// added to part 1


let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// WORKS 
let cells =[] // 4  6
let str =""
let rowCount = 0 // added for part 2
let columnCount=0  // added for part 2
let cellCount = 0  // added for part 2
// let header = rowCount[0]; // doesn't work


for (let i=0; i<=csv.length; i++){//i=3
    // this will log each letter individually on a different line
    let char = csv[i];
    if(char===","){
        cells.push(str) //[ ID , Name ]
        cellCount += 1  // added for part 2
        str = "" // clears it so that the name can be a new thing
    } else if (char==="\n" || i===csv.length){
        cells.push(str)
        console.log(cells)
        rowCount+= 1  // added for part 2
        cellCount+=1  // added for part 2
        str=""
        cells =[]        
    } else {
        str+= char //Name
    }
}
columnCount = cellCount/rowCount  // added for part 2
console.log(`Row count: ${rowCount}`);  // added for part 2
console.log(`Column count: ${columnCount}`);  // added for part 2
console.log(`Cell count: ${cellCount}`);  // added for part 2

// //  ------------- easiest way to write PART 1 -- simplified
// let rows2 = csv.split("\n") // list of strings - 5 rows

// for (let j=0; j<rows2.length; j++){
//     console.log(rows2[j])
//     let cells = rows2[j].split(",")
//     console.log(cells)
// }

// Part 3: Transforming Data
// let parsedCSV = [
//     ["ID", "Name", "Occupation", "Age"],
//     ["42", "Bruce", "Knight", "41"],
//     ["57", "Bob", "Fry Cook", "19"],
//     ["63", "Blaine", "Quiz Master", "58"],
//     ["98", "Bill", "Doctor’s Assistant", "26"],
//   ];
  
//   let headers = parsedCSV[0]; // Extract the headers
//   let transformedData = [];
  
//   for (let i = 1; i < parsedCSV.length; i++) {
//     let row = parsedCSV[i];
//     let obj = {};
  
//     for (let j = 0; j < row.length; j++) {
//       obj[headers[j].toLowerCase()] = row[j]; // Map headers to values
//     }
  
//     transformedData.push(obj);
//   }
  
//   console.log("Transformed Data:", transformedData);
  

// Part 4: Sorting and Manipulating Data
// transformedData.pop();

// transformedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// transformedData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// let ageSum = 0;
// for (let i = 0; i < transformedData.length; i++) {
//   ageSum += parseInt(transformedData[i].age); // Convert age to a number
// }
// let averageAge = ageSum / transformedData.length;
// console.log("Average Age:", averageAge);

// Part 5: Full Circle

// let transformedData = [
//     { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//     { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//     { id: "7", name: "Bilbo", occupation: "None", age: "111" },
//   ];
  
//   let headers = Object.keys(transformedData[0]).join(",");
//   let csvRows = [headers];
  
//   for (let i = 0; i < transformedData.length; i++) {
//     let row = Object.values(transformedData[i]).join(",");
//     csvRows.push(row);
//   }
  
//   let csvString = csvRows.join("\n");
//   console.log("CSV String:\n" + csvString);