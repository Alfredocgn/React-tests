import { useEffect, useState } from "react"
import './styles.css'

interface Product {
  title:string
}

interface Props {
  url:string
}

export const ScrollIndicator:React.FC<Props> = ({url}) => {

  const [data,setData] = useState<Product[]>([])
  const [loading,setLoading] = useState<boolean>(false)
  const [errorMessage,setErrorMessage] = useState<string>('')
  const [scrollPorcentage,setScrollPorcentage] = useState<number>(0)


  const fetchData  = async (getUrl:string) => {
    try {
      setLoading(true)
      const response = await fetch(getUrl)
      const data = await response.json()
      console.log(data)

      if(data && data.products && data.products.length > 0){
        setData(data.products)
        setLoading(false)

      }



      
    } catch (error) {
      console.log(error)
      setErrorMessage(String(error))
      
    }
  }

  useEffect(() => {


    fetchData(url)
  },[url])



  const handleScrollPercentage = () => {
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setScrollPorcentage((howMuchScrolled/height)*100)
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScrollPercentage)

    return() => {
      window.removeEventListener('scroll',() => {})
    }
  },[])

  if(errorMessage){
    return <div> Error! {errorMessage}</div>
  }

  if(loading){
    return <div>Loading data! Please wait...</div>
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div className="current-progress-bar" style={{width:`${scrollPorcentage}%`}}>
          </div>
        </div>
      </div>
      <div className="data-container">
        {
          data && data.length > 0 ? 
          data.map(dataItem => {
            return (
              <p>{dataItem.title}</p>
            )
          }) : null
        }
      </div>
    </div>
  )
}
