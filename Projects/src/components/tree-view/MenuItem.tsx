import { useState } from "react"
import { MenuList } from "./MenuList"

interface MenuItemProps {
  item:{
    label:string;
    children?:{
      label:string;
      children?:{label:string}[];
    }[];
  }
}


export const MenuItem : React.FC<MenuItemProps> = ({item}) => {

  const [displayCurrentChildren,setDisplayCurrentChildren] = useState<Record<string,boolean>>({})

  const handleToggleChildren = (getCurrentLabel:string) => {
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
