export default function SumProductForm(props) {
  return (
    <form>
      <h3>Exercise 1</h3>
      <input
        value={props.value1}
        id="value1"
        onChange={(event) => props.setValue1(event.target.value)}
        type="number"
      />
      <input
        value={props.value2}
        id="value2"
        onChange={(event) => props.setValue2(event.target.value)}
        type="number"
      />

      <button
        onClick={() =>
          props.setSum(Number(props.value1) + Number(props.value2))
        }
        type="button"
      >
        Get sum
      </button>
      <button
        onClick={() =>
          props.setProduct(Number(props.value1) * Number(props.value2))
        }
        type="button"
      >
        Get product
      </button>

      <output htmlFor="value1 value2">
        <p>Sum: {props.sum}</p>
        <p>Product: {props.product}</p>
      </output>
    </form>
  );
}
