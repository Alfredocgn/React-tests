import { useEffect, useState } from 'react'
import './styles.css'
import { User, UserProps } from './user'



export const GithubProfileFinder: React.FC = () => {
  const [username,setUsername] = useState('Alfredocgn') 
  const [userData,setUserData] = useState<UserProps|null>(null)
  const [loading,setLoading] = useState<boolean>(false)

  const fetchGithubUserData = async () =>{
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    if(data){
      setUserData(data)
      setLoading(false)
      setUsername('')
    }


  }

  const handleSubmit = () => {
    fetchGithubUserData()
    setUsername('')

  }


  useEffect(() => {
    fetchGithubUserData()

  },[])

  if(loading){
    return <h1>Loading Data Please Wait</h1>
  }

  return (
    <div className='github-profile-container'>
      <div className='input-wrapper'>
        <input type="text" name="search-by-username" placeholder='Search Github Username...' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null
      }

    </div>
  )
}
