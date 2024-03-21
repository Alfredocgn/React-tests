import { Tabs } from "./tabs"
import './tab.css'



const RandomComponent = () => {

  return <h1>Random Content</h1>
}


export const TabTest = () => {

  const tabs = [
    {
      label:'Tab 1',
      content: <div>This is content for Tab 1</div>
    },
    {
      label:'Tab 2',
      content: <div>This is content for Tab 2</div>
    },
    {
      label:'Tab 3',
      content: <RandomComponent/>
    },
  ]

  const handleChange = (currentTabIndex) =>{
    console.log(currentTabIndex)

  }

  return (
    <Tabs tabsContent ={tabs} onChange={handleChange}/>
  )
}
