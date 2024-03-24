import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
  switch (action.type) {
    case 'sort': {
      return state.sort((a, b) =>
        action.payload === 'down'
          ? b.name.length - a.name.length
          : a.name.length - b.name.length
      )
    }
    case 'check': {
      return state.filter((user) => user.age >= action.payload)
    }
    default:
      return state
  }
}
