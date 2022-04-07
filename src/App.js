import { useEffect, useState } from "react"


const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function handleGetUsers() {
        const response = await fetch('https://api.douglascavalcante.link/users')
        const data = await response.json()
        setUsers(data)
    }
    handleGetUsers()
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>Nome</tr>
          <tr>Nickname</tr>
          <tr>email</tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.nickname}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App