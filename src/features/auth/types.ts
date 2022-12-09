export interface AuthState {
  auth: boolean
}

export enum AuthActionsEnum {
  SET_AUTH = '',
}

interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH
  payload: boolean
}

export type AuthAction = SetAuthAction
