"use strict";

// Functions in React
// Exercise 1 - make a getDigitsSum function
function App() {
  function getDigitsSum(num) {
    return num
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  }
  const sum = getDigitsSum(123);

  return <div> {sum} </div>;
}

// Exercise 2 - create three button triggers
function App() {
  function buttonClick(num) {
    alert(num);
  }

  return (
    <div>
      <button onClick={() => buttonClick(1)}>show1</button>
      <button onClick={() => buttonClick(2)}>show2</button>
      <button onClick={() => buttonClick(3)}>show3</button>
    </div>
  );
}

// Exercise 3 - create event buttons
function App() {
  function func(event) {
    console.log(event); // event object
  }

  return <button onClick={func(Event)}>Event object</button>;
}

function App() {
  function func(event) {
    console.log(event.target); // event object
  }

  return <button onClick={func(Event)}>event.target object</button>;
}

// Exercise 4 - Event objects with parameters
function App() {
  function func(arg1, arg2, event) {
    console.log(arg1, arg2, event);
  }

  return (
    <div>
      <button onClick={(event) => func("Parameter 1", "Parameter2", event)}>
        act
      </button>
    </div>
  );
}

function App() {
  function func(event, arg) {
    console.log(event, arg);
  }

  return (
    <div>
      <button onClick={(event) => func(event, "argument comes after event")}>
        act
      </button>
    </div>
  );
}

function App() {
  function func(arg1, event, arg2) {
    console.log(arg1, event, arg2);
  }

  return (
    <div>
      <button onClick={(event) => func("Parameter 1", event, "Parameter2")}>
        act
      </button>
    </div>
  );
}

// Exercise 5 - Create a list using a for loop
function App() {
  const arr = [];

  for (let i = 0; i <= 5; i++) {
    arr.push(<li>{i}</li>);
  }

  return <ul>{arr}</ul>;
}

// Exercise 6 - Rendering array data
function App() {
  const arr = ["a", "b", "c", "d", "e"];

  const lists = arr.map((text) => {
    return <li key={text}>{text}</li>;
  });

  return <ul>{lists}</ul>;
}

// Exercise 7 - Print elements as an unordered list
function App() {
  const users = [
    { name: "name1", username: "user1", age: 30 },
    { name: "name2", username: "user2", age: 31 },
    { name: "name3", username: "user3", age: 32 },
  ];

  return (
    <main>
      {users.map((user) => {
        return (
          <li key={user.name}>
            <span>{user.name}</span> : <span>{user.username}</span> :{" "}
            <span>{user.age}</span>
          </li>
        );
      })}
    </main>
  );
}

// Exercise 8 - Add ids to the previous exercise
function App() {
  const users = [
    { id: 1, name: "name1", username: "user1", age: 30 },
    { id: 2, name: "name2", username: "user2", age: 31 },
    { id: 3, name: "name3", username: "user3", age: 32 },
  ];

  return (
    <main>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <span>{user.name}</span> : <span>{user.username}</span> :{" "}
            <span>{user.age}</span>
          </li>
        );
      })}
    </main>
  );
}

// Exercise 9 - Output the array into a table
function App() {
  const users = [
    { id: 1, name: "name1", username: "user1", age: 30 },
    { id: 2, name: "name2", username: "user2", age: 31 },
    { id: 3, name: "name3", username: "user3", age: 32 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
