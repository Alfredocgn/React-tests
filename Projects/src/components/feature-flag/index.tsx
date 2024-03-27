import { useContext } from "react"
import { Accordion } from "../accordion"
import { LightDarkMode } from "../light-dark-mode"
import { RandomColor } from "../random-color"
import { TicTacToe } from "../tic-tac-toe"
import { TreeView } from "../tree-view"
import FeatureFlagsContext from "./context"





export const FeatureFlags = () => {

  const {loading,enabledFlags} = useContext(FeatureFlagsContext)




  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode/>
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe/>
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor/>
    },
    {
      key: "showAccordion",
      component: <Accordion/>
    },
    {
      key: "showTreeView",
      component: <TreeView/>
    },
  ]

  const checkEnabledFlags = (getCurrentKey:string) => {
    return enabledFlags[getCurrentKey]
  }

  if(loading){
    return <div>Loading Data Please Wait</div>
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
      }
    </div>
  )
}
