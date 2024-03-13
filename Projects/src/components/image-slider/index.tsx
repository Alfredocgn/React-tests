
import { useEffect, useState } from 'react'
import {  BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'

interface Image {
  id:number
  download_url:string
}

interface ImageSliderProps {
  url:string
  limit?:number
  page?:number
}

export const ImageSlider: React.FC<ImageSliderProps> = ({url,limit =5,page=1}) => {

  const [images,setImages] = useState<Image[]>([])
  const [currentSlide,setCurrentSlide] = useState(0)
  const [error,setError] = useState<string | null>(null)
  const [loading,setLoading] = useState(false)

  const fetchImages = async (getUrl:string) => {
    try {
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if(data){
        setImages(data)
        setLoading(false)
      }
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setError(e.message)
      setLoading(false)
      
    }

  }

  useEffect(()=>{
    if(url !== ''){
      fetchImages(url)
    }
  },[url])

  if(loading){
    return <div>Loading data! Please wait</div>
  }

  if(error !== null){
    return <div>Error {error}</div>
  }

  const handlePrevious = () =>{
    setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide -1)
    
  }
  const handleNext = () =>{
    setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1)

  }


  return (
    <div className='container'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevious}/>
      {
        images && images.length ?
        images.map((imageItem,index) => {
          return(
            <img 
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
            />

          )
        })
        : null } 
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNext} />
      <span className='circle-indicators'>
        {
          images && images.length ?
          images.map((_,index) => {
            return(
              <button key={index} className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'} onClick={() => setCurrentSlide(index)}></button>
            )
          })
        : null}
      </span>
      
    </div>
  )
}
