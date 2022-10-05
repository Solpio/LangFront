export interface IUser {
  body: {
    email: string
    username: string
    password: string
    avatar?: string
  }
}

export interface IUserLogin {
  body: {
    login: string
    password: string
  }
}
