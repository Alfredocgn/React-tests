import { useState } from "react"
import { FaStar } from "react-icons/fa"
import './style.css'

interface StarRatingProps {
  numberOfStars? : number
}

export const StarRating : React.FC<StarRatingProps> = ({numberOfStars = 5}) => {
  const [rating,setRating] = useState(0)
  const [hover,setHover] = useState(0)

  const handleClick = (getCurrentIndex:number) =>{
    setRating(getCurrentIndex)
    
  }
  const handleMouseEnter = (getCurrentIndex:number) =>{
    setHover(getCurrentIndex)

  }
 
  const handleMouseLeave = () =>{
    setHover(rating)
  

  }
  
  return (
    <div className="star-rating">
      {
        [...Array(numberOfStars)].map((_,index) => {
          index += 1
          return(
            <FaStar 
            key={index} 
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() =>  handleClick(index)} 
            onMouseEnter={() => handleMouseEnter(index)} 
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            />

          )

        })
      }

      
    </div>
  )
}
