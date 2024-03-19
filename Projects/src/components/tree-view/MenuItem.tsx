import { useState } from "react"
import { MenuList } from "./MenuList"




export const MenuItem = ({item}) => {

  const [displayCurrentChildren,setDisplayCurrentChildren] = useState({})

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel],
    })

  }

  return (
    <li>
      <div style={{display:'flex',gap:'20px'}}>
        <p>{item.label}</p>
        {
          item && item.children && item.children.length ? <span onClick={()=>handleToggleChildren(item.label)}>{
            displayCurrentChildren[item.label] ? '-' : '+'
          }</span> : null
        }
      </div>


    {
      item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? <MenuList list={item.children}/> : null
    }
    
    </li>

    
  )
}
