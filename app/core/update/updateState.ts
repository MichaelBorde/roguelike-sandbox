import { Point, Vector } from '../tools';
import { addVectorToPoint } from '../tools/geometry';
import { ControllerState } from './controller';
import { State } from './state';
import { Player } from './player';

export type UpdateState = (
  update: { controllerState: ControllerState; state: State; timestamp: number }
) => State;

export function updateState(description: {
  controllerState: ControllerState;
  state: State;
  timestamp: number;
}) {
  const { controllerState, state, timestamp } = description;
  if (controllerState.up) {
    return movePlayer(state, { x: 0, y: -1 }, timestamp);
  } else if (controllerState.down) {
    return movePlayer(state, { x: 0, y: 1 }, timestamp);
  } else if (controllerState.left) {
    return movePlayer(state, { x: -1, y: 0 }, timestamp);
  } else if (controllerState.right) {
    return movePlayer(state, { x: 1, y: 0 }, timestamp);
  }
  return { ...state };
}

function movePlayer(state: State, movement: Vector, timestamp: number) {
  if (!playerIsReadyToMove(state.player, timestamp)) {
    return state;
  }
  const nextPosition = addVectorToPoint(movement, state.player.position);
  if (!playerCanReach(state, nextPosition)) {
    return state;
  }
  return {
    ...state,
    player: {
      ...state.player,
      position: nextPosition,
      lastMoveTime: timestamp
    }
  };
}

function playerIsReadyToMove(player: Player, timestamp: number): boolean {
  return timestamp > player.lastMoveTime + 300;
}

function playerCanReach(state: State, position: Point): boolean {
  const sceneryElement = state.scenery[position.y][position.x];
  return sceneryElement.passable;
}
