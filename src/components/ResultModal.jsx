export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result} </h2>
      <p>
        Target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        You stopped the timer with <strong>X</strong> seconds left{" "}
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
