import { MenuList } from "./MenuList"



export const TreeView = ({menus = []}) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus}/>
    </div>
  )
}
