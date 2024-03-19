import { useEffect, useState } from "react"
import './style.css'

interface Product {
  id:number;
  thumbnail:string;
  title:string;
}


export const LoadMoreData = () => {

  const [loading,setLoading] =useState<boolean>(false)
  const [products,setProducts] = useState<Product[]>([])
  const [count,setCount] = useState<number>(0)
  const [disabledButton,setDisabledButton] = useState<boolean>(false)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count *20}`)
      const result = await response.json()

      if(result && result.products && result.products.length){
        setProducts((prevData) => [...prevData,...result.products])
        setLoading(false)
      }

      
    } catch (error) {
      console.log(error)
      setLoading(false)
      
    }

  }

  useEffect(() => {
    fetchProducts()

  },[count])

  useEffect(()=>{
    if(products && products.length === 100){
      setDisabledButton(true)
    }
  },[products])


  if(loading){
    return <div>Loading data! Please wait</div>
  }
  return (
    <div className="conload-more-container">
      <div className="product-container">
        {
          products && products.length ? products.map(product => {
            return (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title}/>
                <p>{product.title}</p>
              </div>
            )
          })
        : null } 
      </div>
      <div className="button-container">
        <button disabled={disabledButton} onClick={() => setCount(count+1)}>Load More Products </button>
        {
          disabledButton ? <p>There are no more products</p> : null
        }
      </div>
    </div>
  )
}
