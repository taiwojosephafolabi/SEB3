export default function GreetingsCheckbox(props) {
  return (
    <form>
      <h3>Exercise 5</h3>

      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.handleChange}
        id="checkbox"
      />

      <button
        onClick={() => props.setGreeting(props.greeting ? "Hello" : "Goodbye")}
        type="button"
      >
        Greeting
      </button>

      <output htmlFor="checkbox">
        <p>Checked: {props.greeting}</p>
      </output>
    </form>
  );
}
