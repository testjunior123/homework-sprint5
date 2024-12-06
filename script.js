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
                //input[i].nickname = final3FirstName.concat(reversedLastName);
           
                input[i].nickname = FirstletterBig+secPart+reversedLastName;
                //console.log(input[i],final3FirstName,FirstletterBig )  // Tworzenie pseudonimu
            }
        }
        return input;  // Zwrócenie zaktualizowanej tablicy
    } 
}

  //console.log(addRecord(sourceData));

  const newSourceData = addRecord(sourceData);

 //console.log(newSourceData);

  const newArray= newSourceData.filter(element => element.nickname)

  newArray.forEach((element,index,array) => {
    const firstNameLength = element.firstName.length;
      const lastNameLength = element.lastName.length;
      const nickNameLength = element.nickname.length;
      const age = firstNameLength + lastNameLength;

    if(typeof element.nickname === "string"){
      //console.log(element.firstName,firstNameLength)
      if(age%2===0){   // liczba liter jest parzysta
        element.age = age;
      } else { // liczba liter nie jest parzysta
        const keyLengthSum = Object.keys(element)
        .filter(key => ['firstName', 'lastName', 'nickname'].includes(key)) // Filtrujemy odpowiednie klucze
        .reduce((acc, key) => acc + key.length, 0);  // Zliczamy długość kluczy

  // Obliczamy age (sumę długości kluczy podzieloną przez indeks osoby, z wyjątkiem indeksu 0)
         const newAge = keyLengthSum / (index === 0 ? 1 : index); // Jeśli index = 0, dzielimy przez 1
      element.age = newAge;  // Przypisujemy obliczoną wartość do pola 'age'
    }
  }
});

console.log(newArray);

