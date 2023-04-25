export default function SumDigitsForm(props) {
  return (
    <form>
      <h3>Exercise 4</h3>
      <input
        value={props.value1}
        id="value3"
        onChange={(event) => props.setValue3(event.target.value)}
        type="number"
      />

      <button
        onClick={() =>
          props.setSumDigits((props.value3).toString().split('').map(Number).reduce(function(a, b) {return a + b}, 0))
        }
        type="button"
      >
        Get sum of digits
      </button>

      <output htmlFor="value3">
        <p>Sum of digits: {props.sumDigits}</p>
      </output>
    </form>
  );
}
