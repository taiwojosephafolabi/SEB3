import React from "react";
import FirstNameBtn from "./FirstNameBtn";
import LastNameBtn from "./LastNameBtn";
import AgeBtn from "./AgeBtn";

function Users(props) {
  return (
    <div className="users-container">
      {props.users.map((usersData, index) => (
        <div key={index} className="user">
          <h4>First Name:</h4>
          <p>{usersData.firstName}</p>
          <h4>Last Name:</h4>
          <p>{usersData.lastName}</p>
          <h4>Age:</h4>
          <p>{usersData.age}</p>
          <span className="button-container">
            <FirstNameBtn FirstNameChange={props.FirstNameChange} />
            <LastNameBtn LastNameChange={props.LastNameChange} />
            <AgeBtn AgeChange={props.AgeChange} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
