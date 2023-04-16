"use strict";

// Ternary Operator
// Exercise 1 - show a different text using operator
function App() {
  const age = 19;
  return <p>{age ? "You are older than 18" : "You are not 18 yet"}</p>;
};

// Exercise 2 - only show text if true
function App() {
  const isAuth = true;

  return <div>{isAuth && <p>you are logged in</p>}</div>;
};

// Exercise 3 - only show text if false
function App() {
  const isAuth = false;
  return (
    <div>
      {!isAuth && <p>Please login.</p>}
    </div>
  );
}