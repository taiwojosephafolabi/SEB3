"use strict";

// JSX Syntax
function App() {
  return (
    <main>
      <p>text</p>
    </main>
  );
}

// Tag Nesting
// Exercise 1 - return the ul tag
function App() {
  return (
    <ul>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>
    </ul>
  );
}

// Exercise 2 - return 2 ul tags
function App() {
  return (
    <>
      <ul>
        <li>text1</li>
        <li>text2</li>
      </ul>
      <ul>
        <li>text3</li>
        <li>text4</li>
      </ul>
    </>
  );
}

// Exercise 3 - return an input tag
function App() {
  return <input />;
}

// Exercise 4 - return three input tags
function App() {
  return (
    <>
      <input />
      <input />
      <input />
    </>
  );
}

//Using Variables and Constants
// Exercise 5 - add id to element
function App() {
  const attr = "block";
  return <p id={attr}>text</p>;
}

// Exercise 6 - add class to element
function App() {
  const class1 = "block1";
  const class2 = "block2";

  return (
    <div>
      <p class={class1}>text</p>
      <p class={class2}>text</p>
    </div>
  );
}

// Exercise 7 - add class to element
function App() {
  const attr = "block";
  return <p class={attr}>text</p>;
}

// Exercise 8 - correct the mistakes
function App() {
  const str1 = "label";
  const str2 = "block";
  const str3 = "elem";

  return (
    <div>
      <label id={str1} for={str2} class={str3}>
        text
      </label>
      <br />
      <input id={str2} />
    </div>
  );
}

// Exercise 9 -
function App() {
  let = text;
  const isAdult = true;

  if (isAdult) {
    text = <p>You are an adult</p>;
  } else {
    text = <p>You are not 18</p>;
  }

  return <div>{text}</div>;
}

// Exercise 10
function App() {
  let = text;
  const isAdmin = true;

  if (isAdmin) {
    text = <p>You are an admin!</p>;
  }

  return <div>{text}</div>;
}
