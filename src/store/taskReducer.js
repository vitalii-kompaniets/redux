import { taskDeleted, taskUpdated } from "./actionTypes";

export function taskReducer(state = [], action) {
  const newArray = [...state];
  switch (action.type) {
    case taskUpdated:
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      return newArray;

    case taskDeleted:
      const deleteElement = newArray.filter(
        (el) => el.id !== action.payload.id
      );
      return deleteElement;

    default:
      return state;
  }
}
