// import { Accordion } from "./components/accordion"
import './App.css'
import { TreeView } from './components/tree-view'
// import { ImageSlider } from './components/image-slider'
// import { LoadMoreData } from './components/load-more-button'
// import { StarRating } from './components/star-rating'
// import { RandomColor } from "./components/random-color"
import {menus,MenuClass}from './components/tree-view/data'




function App() {


  return (
    <>
    {/* <Accordion/> */}
    {/* <RandomColor/> */}
    {/* <StarRating numberOfStars={10}/> */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1}/> */}
    {/* <LoadMoreData/> */}
    <TreeView menus={menus} />
    </>
  )
}

export default App
