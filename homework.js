// Part 1: Create an object with all 7 data types
const me = {
    name: "Moe",                 // string
    gender: "Female",            // string
    city: "Meiktila",           // string
    dob: 2004,                   // number (birth year example)
    isStudent: true,             // boolean
    email: undefined,            // undefined
    car: null,                   // null
    hobbies: ["coding", "music", "reading"], // array
    mother: {                    // object
      name: "Daw Su",
      dob: 1978
    }
  };
  
  // Print "me" object to Console when Task 1 button is clicked
  function task1() {
    console.log(me);
  }
  // Copy getPersonInfo from class (do not change the function)
function getPersonInfo(name, dob, gender) {
  console.log("Name:", name, "| DOB:", dob, "| Gender:", gender);
}

// Part 2: Call getPersonInfo using properties from "me"
function task2() {
  getPersonInfo(me.name, me.dob, me.gender);
}
// Part 3: Check age >= 18 AND city === "Yangon"
function task3() {
    const currentYear = 2026;
    const age = currentYear - me.dob;
  
    if (age >= 18 && me.city === "Yangon") {
      console.log("Welcome");
    } else {
      console.log("Sorry");
    }
  }
  // Part 5a: getAge function using return
function getAge(dob) {
    const currentYear = 2026;
    return currentYear - dob;
  }
  
  // Button handler for "Get Ages"
  function runGetAge() {
    const myAge = getAge(me.dob);
    const motherAge = getAge(me.mother.dob);
  
    console.log("My age:", myAge);
    console.log("Mother's age:", motherAge);
  }
  
  // Part 5b: introduce(person) taking one object parameter
  function introduce(person) {
    const personAge = getAge(person.dob);
    console.log(`${person.name} is ${personAge} years old and lives in ${person.city}.`);
  }
  
  // Button handler for "Introduce"
  function runIntroduce() {
    introduce(me);
  }