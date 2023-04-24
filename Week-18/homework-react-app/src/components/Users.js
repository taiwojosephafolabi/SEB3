import React from "react";
import FirstNameBtn from "./FirstNameBtn";
import LastNameBtn from "./LastNameBtn";
import AgeBtn from "./AgeBtn";
import VerificationBtn from "./VerificationBtn";
import AgeIncreaseBtn from "./AgeIncreaseBtn";
import AgeDecreaseBtn from "./AgeDecreaseBtn";

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
            <VerificationBtn VerificationStatus={props.VerificationStatus} />
            <AgeIncreaseBtn AgeIncrease={props.AgeIncrease} />
            <AgeDecreaseBtn AgeDecrease={props.AgeDecrease} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
