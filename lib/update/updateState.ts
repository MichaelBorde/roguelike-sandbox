import { Point, Vector } from '../tools';
import { ControllerState } from './controller';
import { State } from './state';

export type UpdateState = (
  update: { controllerState: ControllerState; state: State; timestamp: number }
) => State;

export function updateState(description: {
  controllerState: ControllerState;
  state: State;
  timestamp: number;
}) {
  const { controllerState, state } = description;
  if (controllerState.up) {
    return movePlayer(state, new Vector({ x: 0, y: -1 }));
  } else if (controllerState.down) {
    return movePlayer(state, new Vector({ x: 0, y: 1 }));
  } else if (controllerState.left) {
    return movePlayer(state, new Vector({ x: -1, y: 0 }));
  } else if (controllerState.right) {
    return movePlayer(state, new Vector({ x: 1, y: 0 }));
  }
  return { ...state };
}

function movePlayer(state: State, movement: Vector) {
  const nextPosition = new Point(state.player.position).add(movement);
  if (movementAllowed(state, nextPosition)) {
    return {
      ...state,
      player: {
        ...state.player,
        position: nextPosition
      }
    };
  }
  return state;
}

function movementAllowed(state: State, position: Point) {
  return state.scenery[position.y][position.x] === '.';
}
