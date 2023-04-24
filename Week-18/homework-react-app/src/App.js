import "./App.css";
import React, { useId, useState } from "react";
import Users from "./components/Users";

function App() {
  const usersData = [
    { id: useId(), firstName: "Joseph", lastName: "A", age: 21 },
    { id: useId(), firstName: "Luke", lastName: "I", age: 25 },
    { id: useId(), firstName: "Beatrice", lastName: "P", age: 37 },
    { id: useId(), firstName: "Tom", lastName: "B", age: 72 },
  ];

  const [firstName, setFirstName] = useState("first name");
  const [lastName, setLastName] = useState("last name");
  const [age, setAge] = useState(0);
  const [verification, setVerification] = useState(null);

  function FirstNameChange() {
    setFirstName("Joseph");
    console.log("First name changed!");
  }

  function LastNameChange() {
    setLastName("Afolabi");
    console.log("Last name changed!");
  }

  function AgeChange() {
    setAge(21);
    console.log("Age changed!");
  }

  function VerificationStatus() {
    setVerification("YOU ARE BANNED!");
    console.log("User is banned!")
  }

  function AgeIncrease(item) {
    setAge(item += 1);
    console.log("Age increased!")
  }

  function AgeDecrease(item) {
    setAge(item -= 1);
    console.log("Age decreased!")
  }

  return (
    <div className="App">
      <h1 className="heading">Users</h1>

      <Users
        users={usersData}
        usersFName={firstName}
        setFirstName={setFirstName}
        usersLName={lastName}
        setLasttName={setLastName}
        usersAge={age}
        setAge={setAge}
        usersVerification={verification}
        setVerification={setVerification}
        FirstNameChange={(event) => FirstNameChange(firstName)}
        LastNameChange={(event) => LastNameChange(lastName)}
        AgeChange={(event) => AgeChange(age)}
        VerificationStatus={(event) => VerificationStatus(verification)}
        AgeIncrease={(event) => AgeIncrease(age)}
        AgeDecrease={(event) => AgeDecrease(age)}
      />
      <span className="user-info">
        <p>
          Hello {firstName} {lastName}.
        </p>
        <p>You are {age} years old.</p>
        <p>Verification Status: {verification}</p>
      </span>
    </div>
  );
}

export default App;
