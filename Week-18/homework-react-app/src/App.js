import "./App.css";
import React from "react";
import Users from "./components/Users";
import { useId, useState } from "react";

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
    setFirstName("NewName");
    console.log("First name changed!");
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
      />
    </div>
  );
}

export default App;
