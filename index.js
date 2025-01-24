// // Part 1: Refactoring Old Code
// // change cells to arrays, and it should be dynamic, another array to be a row
// Part 2: Expanding Functionality
// added to part 1
// Part 3: Transforming Data
// integrated into part 1
// Part 4: Sorting and Manipulating Data
//integrated some code into part 1

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// WORKS 
let cells =[] // 4  6
let str =""
let rowCount = 0 // added for part 2
let columnCount=0  // added for part 2
let cellCount = 0  // added for part 2
let rows = [] // added for part 3
// let header = rowCount[0]; // doesn't work
let totalAge = 0; // added for part 4


for (let i=0; i<=csv.length; i++){//i=3
    // this will log each letter individually on a different line
    let char = csv[i];
    if(char===","){
        // update: added .trim() in case there are spaces before or after that I want to remove and that makes it better and more reusable code
        // can't do a .push() on a string 
        // can't do a .trim() on an array -- only on a string
        cells.push(str.trim()); //[ ID , Name ]
        cellCount += 1  // added for part 2
        str = "" // clears it so that the name can be a new thing
    } else if (char==="\n" || i===csv.length){
        cells.push(str.trim())
        console.log(cells) //this will log each row of the data as an array
        rowCount+= 1  // added for part 2
        rows.push(cells) // added for part 3 to get row count
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
console.log(rows[0]); // added for part 3 -- separates and logs the header row 

// PART 3
// separates header and make lowercase
let headers = rows[0].map(header => header.toLowerCase()); 
let transformedData = []; 

for (let i =1; i<rows.length; i++){
    let row = rows[i];
    let obj ={};

    for (let j = 0; j<row.length; j++) {
        obj[headers[j]] = row[j]; // Map each value to its corresponding header
    }
    transformedData.push(obj);
}
console.log("Transformed Data:", transformedData);


// //  ------------- easiest way to write PART 1 -- simplified
// let rows2 = csv.split("\n") // list of strings - 5 rows

// for (let j=0; j<rows2.length; j++){
//     console.log(rows2[j])
//     let cells = rows2[j].split(",")
//     console.log(cells)
// }

// Part 4: Sorting and Manipulating Data
transformedData.pop(); // removes last element from sorted array

let newObject1= { id: "48", name: "Barry", occupation: "Runner", age:"25" };
transformedData.splice(1, 0, newObject1); // inserts object at index 1

let newObject2 = {id: "7", name: "Bilbo", occupation: "None", age: "111"};
transformedData.push(newObject2); //adds object to the end of the array

console.log("Updated Data:", transformedData);

// average age
let length = transformedData.length;

for (let i = 0; i< length; i++){
    totalAge += parseInt(transformedData[i].age); // converts age from string to integer and adds to totalAge
}
 let averageAge = totalAge/length; 
 console.log(`Average age: ${averageAge}`);


// Part 5: Full Circle
let csvHeaders = headers.map(h =>h.charAt(0).toUpperCase() + h.slice(1));
let csvRows =[]; // make headers again

//adding the header row
csvRows.push(csvHeaders.join(",")); //adds the header row with the comma separation
console.log(csvHeaders); // will log [ 'Id', 'Name', 'Occupation', 'Age' ]

//adding the data rows
transformedData.forEach(obj => {
    let row = csvHeaders.map(header => obj[header.toLowerCase()]); 
    
    //makes all rows together in one array with each row as one index of the new array -- commas to separate elements in that string
    csvRows.push(row.join(",")); 
})
// console.log(csvHeaders);
// console.log(csvRows);

//joins all of the rows with \n so it's one string
let finalCsv = csvRows.join("\n");

//Use this code instead of the above one if you want it to show up in the console without breaking the line: 
// let finalCsv = csvRows.join("\\n");

console.log(`Final CSV: ${finalCsv}`);