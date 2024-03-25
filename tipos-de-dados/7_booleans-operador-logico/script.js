


//   && (and)  -  PREVALECE O "FALSE"

//          TRUE     FALSE
console.log(1 < 2 && 1 > 2);

//           TRUE             TRUE
console.log(1 == 1 && "Marcos" == "Marcos");





//   || (or)  -  PREVALECE O "TRUE"

//          TRUE     FALSE
console.log(1 < 2 || 1 > 2);

//           FALSE             FALSE
console.log(1 != 1 || "Marcos" == "Marcus");

console.log("\n")





//    ! (not)  -  MUDA O RESULTADO


//   && (and)  -  PREVALECE O "FALSE", MAS COM O ! MUDA PARA "TRUE"

//            TRUE     FALSE
console.log(!(1 < 2 && 1 > 2));

//             TRUE             TRUE
console.log(!(1 == 1 && "Marcos" == "Marcos"));


//   || (or)  -  PREVALECE O "TRUE", MAS COM O ! MUDA PARA "FALSE"

//            TRUE     FALSE
console.log(!(1 < 2 || 1 > 2));

//             FALSE            FALSE
console.log(!(1 != 1 || "Marcos" == "Marcus"));





console.log("\n")






console.log(typeof (1 < 2 && 1 > 2));
console.log(typeof (1 == 1 && "Marcos" == "Marcos"));
console.log(typeof (1 < 2 || 1 > 2));
console.log(typeof (1 != 1 && "Marcos" == "Marcus"));

console.log(typeof (!(1 < 2 && 1 > 2)));
console.log(typeof (!(1 == 1 && "Marcos" == "Marcos")));
console.log(typeof (!(1 < 2 || 1 > 2)));
console.log(typeof (!(1 != 1 && "Marcos" == "Marcus")));


console.log("\n")



//   && (and)  -  PREVALECE O "FALSE"

//                  TRUE       STRING
console.log(typeof (1 < 2 && "Marcos"));

//                  FALSE     STRING
console.log(typeof (1 > 2 && "Marcos"));

//   && (and)  -  PREVALECE O "FALSE", MAS COM O ! MUDA PARA "TRUE"
//                   ! FALSE       STRING
console.log(typeof ((!(1 > 2)) && "Marcos"));


console.log("\n")


//   || (or)  -  PREVALECE O "TRUE"

//                  FALSE     STRING
console.log(typeof (1 > 2 || "Marcos"));

//                  TRUE       STRING
console.log(typeof (1 < 2 || "Marcos"));

//   || (or)  -  PREVALECE O "TRUE", MAS COM O ! MUDA PARA "FALSE"
//                   ! TRUE       STRING
console.log(typeof ((!(1 < 2)) || "Marcos"));
