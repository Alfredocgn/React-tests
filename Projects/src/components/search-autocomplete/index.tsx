import { ChangeEvent, useEffect, useState } from "react"
import { Suggestions } from "./suggestion";


interface UserProps {
  firstName:string;
}

interface ErrorResponse{
  message:string
}

export const SearchAutocomplete = () => {

  const [loading,setLoading] = useState<boolean>(false)
  const [users,setUsers] = useState<UserProps[]>([])
  const [error,setError] = useState<ErrorResponse | null>(null)
  const [searchParams,setSearchParams] = useState<string>('')
  const [showDropdown,setShowDropdown] = useState<boolean>(false)
  const [filteredUsers,setFilteredUsers] = useState<UserProps[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const query = e.target.value.toLowerCase()
    setSearchParams(query)
    if(query.length > 1){
      const filteredData = users && users.length ? users.filter(user => user.toLowerCase().indexOf(query) > -1): []
      setFilteredUsers(filteredData)
      setShowDropdown(true)

    }else{
      setShowDropdown(false)
    }
  }

  const fetchListOfUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch(`https://dummyjson.com/users`)
      const data = await res.json()
      if(data && data.users && data.users.length){
        setUsers(data.users.map((userItem) => userItem.firstName))
        setLoading(false)
        setError(null)
      }

    } catch (error) {
      setLoading(false)
      console.error(error)
      setError({message:error.message})
      
    }


  }

  useEffect(() => {
    fetchListOfUsers()
  },[])

  if(loading){
    return <div>Loading Data Please Wait</div>
  }

  if(error){
    return <div>Error fetching data</div>
  }

  const handleClick = (e) =>{
    setShowDropdown(false)
    setSearchParams(e.target.innerText)
    setFilteredUsers([])

  }

  return (
    <div className='search-autocomplete-container'>
      <input name='search-users' placeholder='Search Users Here...' value={searchParams} onChange={handleChange} />
      {
        showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
      }

    </div>
  )
}
