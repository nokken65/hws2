import React from 'react'

import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: UserType['name']) => void // need to fix any
}

export const pureAddUser = (
  name: UserType['name'],
  setError: React.Dispatch<React.SetStateAction<string>>,
  setName: React.Dispatch<React.SetStateAction<string>>,
  addUserCallback: (name: UserType['name']) => void
) => {
  if (name.trim() === '') {
    setError('Ошибка! Введите имя!')
  } else {
    addUserCallback(name)
    setName('')
  }
}

export const pureOnBlur = (
  name: UserType['name'],
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  if (name.trim() === '') {
    setError('Ошибка! Введите имя!')
  }
}

export const pureOnEnter = (
  e: React.KeyboardEvent<HTMLInputElement>,
  addUser: VoidFunction
) => {
  if (e.key === 'Enter') {
    addUser()
  }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback
}) => {
  // деструктуризация пропсов
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState('')

  const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    error && setError('')
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser)
  }

  const totalUsers = users.length
  const lastUserName = users.at(-1)?.name

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
