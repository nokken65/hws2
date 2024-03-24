import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
  switch (action.type) {
    case 'sort': {
      return [
        ...state.sort((a, b) =>
          action.payload === 'down'
            ? b.name.localeCompare(a.name)
            : a.name.localeCompare(b.name)
        )
      ]
    }
    case 'check': {
      return state
        .filter((user) => user.age >= action.payload)
        .sort((a, b) => a.name.localeCompare(b.name))
    }
    default:
      return state
  }
}
