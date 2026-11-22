import type { Direction, Position, Session } from "../core/mod.ts";
import type { BoardInput } from "./tileClicks.ts";
import type { Controller } from "./controllers.ts";

function getClickDirection(
  playerPosition: Position,
  clickPosition: Position,
): Direction | undefined {
  const dPos = {
    dx: clickPosition.x - playerPosition.x,
    dy: clickPosition.y - playerPosition.y,
  };

  if (dPos.dx === -1 && dPos.dy === 0) return "left";
  if (dPos.dx === 1 && dPos.dy === 0) return "right";
  if (dPos.dx === 0 && dPos.dy === -1) return "up";
  if (dPos.dx === 0 && dPos.dy === 1) return "down";
  return undefined;
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session: Session, board: BoardInput) {
    const stop = board.onTileClick((at: Position) => {
      const playerPosition = session.getState().puzzle.player;
      const direction = getClickDirection(playerPosition, at);

      if (direction) session.dispatch({ kind: "move", direction: direction });
    });

    return stop;
  },
};
