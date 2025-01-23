export default function ResultModal({
  ref,
  result,
  targetTime,
  remainingTime,
  onReset,
}) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return (
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      <h2>{userLost ? "You lost" : "You won"}</h2>
      {!userLost && <h2>Your score is {score}%</h2>}
      <p>
        Target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>{" "}
        seconds left
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
