const sourceData = [
    {
      firstName: false,
      lastName: 2,
    },
    {
      firstName: "Roman",
      lastName: "Kowalski",
    },
  
    {
      firstName: "Halina",
      lastName: "Malina",
    },
    {
      firstName: "B",
      lastName: "22",
    },
    {
      firstName: "Jan",
      lastName: "Nowak",
    },
    {
      firstName: "Kamil",
      lastName: null,
    },
  ];

// function addRecord (input) {
//   const copyObject = Object.assign([],input); // const copyObject = [...input];

// for (let i = 0;i<copyObject.length;i++){
// if (!copyObject[i].firstName === false && copyObject[i].lastName !== null) {
//     copyObject[i].nickName = "";
// }
// } return copyObject; //createNick(copyObject);

// console.log(C)
// function createNick(value) {

//     console.log(value);

//     // for (let i = 0; i < value.length; i++) {
//     //   if (value[i].firstName.length > 3 && value[i].lastName.length > 3) {
//     //     const last3firstName = value[i].firstName.slice(-3); // Ostatnie 3 litery `firstName`
//     //     const last3lastName = value[i].lastName.slice(-3);   // Ostatnie 3 litery `lastName`
//     //     value[i].nickName = last3firstName + last3lastName;  // Tworzenie pseudonimu
//     //   }
//     }
//     return value;
//   }


// // wywolanie funckji

// console.log(addRecord(sourceData));


function addRecord(input) {
    // Tworzenie kopii tablicy
    const copyObject = Object.assign([],input); // copyObject = [...input]
  
    // Pierwsza pętla
    for (let i = 0; i < copyObject.length; i++) {
      if (typeof copyObject[i].firstName === "string" && typeof copyObject[i].lastName === "string"  && copyObject[i].firstName.length > 2 && copyObject[i].lastName.length > 2) {
        copyObject[i].nickname = "";
      }
    }
    // Wywołanie `createNick`
    return updateNickname(copyObject);

    function updateNickname(input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i].nickname === "") { // Sprawdzenie, czy nickname jest pusty
                const last3firstName = input[i].firstName.slice(-3).toLowerCase(); 
                const reversedFirstName = last3firstName.split("").reverse().join("");
                const FirstletterBig = reversedFirstName.charAt(0).toUpperCase();
                const secPart = reversedFirstName.slice(1,3);
                const last3lastName = input[i].lastName.slice(0,3).toLowerCase(); 
                const reversedLastName = last3lastName.split("").reverse().join("");
                input[i].nickname = final3FirstName.concat(reversedLastName);
           
                input[i].nickname = FirstletterBig+secPart+reversedLastName;
                //console.log(input[i],final3FirstName,FirstletterBig )  // Tworzenie pseudonimu
            }
        }
        return input;  // Zwrócenie zaktualizowanej tablicy
    } 
}

  console.log(addRecord(sourceData));