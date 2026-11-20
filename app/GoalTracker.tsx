import { isGoal, Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  let goalsFilled = 0;
  for (const crate of puzzle.crates) {
    if (isGoal(puzzle.layout, crate)) goalsFilled++;
  }

  return (
    <dl className="goalTracker">
      <p>Goals filled: {goalsFilled} of {puzzle.layout.goals.length}</p>
    </dl>
  );
}
