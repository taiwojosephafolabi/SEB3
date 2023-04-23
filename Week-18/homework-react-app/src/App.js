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
  const [age, setAge] = useState("age");

  function FirstNameChange() {
    setFirstName("Joseph");
    console.log("First name changed!");
  }

  function LastNameChange() {
    setLastName("Afolabi");
    console.log("Last name changed!");
  }

  function AgeChange() {
    setAge("21");
    console.log("Age changed!");
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
        FirstNameChange={(event) => FirstNameChange(firstName)}
        LastNameChange={(event) => LastNameChange(lastName)}
        AgeChange={(event) => AgeChange(age)}
      />
      <span className="user-info">
        <p>
          Hello {firstName} {lastName}.
        </p>
        <p>You are {age} years old.</p>
      </span>
    </div>
  );
}

export default App;
