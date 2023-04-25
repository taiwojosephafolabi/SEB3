import "./App.css";
import { useState } from "react";
import SumProductForm from "./components/SumProductForm";
import DatesForm from "./components/DatesForm";
import SumDigitsForm from "./components/SumDigitsForm";
import GreetingsCheckbox from "./components/GreetingsCheckbox";

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sum, setSum] = useState(0);
  const [product, setProduct] = useState(0);

  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [dateDifference, setDateDifference] = useState(0);
  const timeDifference = [];

  const [value3, setValue3] = useState(0);
  const [sumDigits, setSumDigits] = useState(0);

  const [checked, setChecked] = useState(true);
  const [greeting, setGreeting] = useState(true);

    const handleChange = () => {
      setChecked(!checked);
    };

  return (
    <div className="App">
      <SumProductForm
        value1={value1}
        value2={value2}
        sum={sum}
        product={product}
        setValue1={setValue1}
        setValue2={setValue2}
        setSum={setSum}
        setProduct={setProduct}
      />
      <DatesForm
        date1={date1}
        date2={date2}
        setDate1={setDate1}
        setDate2={setDate2}
        dateDifference={dateDifference}
        timeDifference={timeDifference}
        setDateDifference={setDateDifference}
      />
      <SumDigitsForm
        value3={value3}
        setValue3={setValue3}
        sumDigits={sumDigits}
        setSumDigits={setSumDigits}
      />

      <GreetingsCheckbox 
      checked={checked}
      setChecked={setChecked}
      greeting={greeting}
      setGreeting={setGreeting}
      handleChange={handleChange}/>
    </div>
  );
}

export default App;
