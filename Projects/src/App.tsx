// import { Accordion } from "./components/accordion"
import './App.css'
import { ImageSlider } from './components/image-slider'
// import { StarRating } from './components/star-rating'
// import { RandomColor } from "./components/random-color"


function App() {


  return (
    <>
    {/* <Accordion/> */}
    {/* <RandomColor/> */}
    {/* <StarRating numberOfStars={10}/> */}
    <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1}/>
    </>
  )
}

export default App
