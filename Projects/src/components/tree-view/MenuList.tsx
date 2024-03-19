import { MenuItem } from "./MenuItem"




export const MenuList = ({list = []}) => {
  return (
    <ul className="menu-list-container">
      {
        list && list.length ?  list.map(listItem => <MenuItem item={listItem}/>  ): null
      }
    </ul>
  )
}
