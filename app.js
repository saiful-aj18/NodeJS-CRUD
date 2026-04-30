const fs = require("fs");

//------- ### Read File----------

//const data = fs.readFileSync("file.txt", "utf8");
// console.log(data);

// console.log("This logs after file is read");

//fs.readFile("file.txt", "utf8", (err, data) => {
 // if (err) throw err;
 // console.log(data);
 //});

//console.log("#####Next Program");

// --------### Write--------

// fs.writeFileSync("output.txt", "Hello from sync!");

// fs.writeFile("output.txt", "Hello Student..", (err, data) => {
//   if (err) throw err;
//   console.log("File written successfully..");
// });

// ---------#### Appending Files-----------

 //fs.appendFile("output.txt", "\nNew Line added", (err) => {
  // if (err) throw err;
  //console.log("Content Appended!");
// });

//fs.appendFileSync("output.txt", "\nNew Line added using sync");

//---------- ### Delete-----------

// fs.unlink("outputs.txt", (err) => {
 //if (err) throw err;
 // console.log("File deleted!");
//});
//fs.unlinkSync("outputss.txt");

// ---------### Checking File Existence-----------

 fs.access("output.txt", fs.constants.F_OK, (err) => {
   if (err) {
     console.log("File does not exist");
   } else {
     console.log("File exists");
   }
 });

//------------ ### Renaming Files-------------------
 fs.rename("oldname.txt", "newname.txt", (err) => {
  if (err) throw err;
   console.log("File renamed successfully.");
 });



