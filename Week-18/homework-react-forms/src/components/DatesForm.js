export default function DatesForm(props) {
  return (
    <form>
      <h3>Exercise 2</h3>
      <input
        value={props.date1}
        id="date1"
        onChange={(event) => props.setDate1(event.target.value)}
        type="date"
      />
      <input
        value={props.date2}
        id="date2"
        onChange={(event) => props.setDate2(event.target.value)}
        type="date"
      />

      <button
        onClick={() => (props.setDateDifference(Math.ceil((Math.abs(Number(props.date2) - Number(props.date1))) / (1000 * 60 * 60 * 24))))
        }
        type="button"
      >
        Get difference
      </button>

      <output htmlFor="date1 date2">
        <p>Difference in dates: {props.dateDifference}</p>
      </output>
    </form>
  );
}
