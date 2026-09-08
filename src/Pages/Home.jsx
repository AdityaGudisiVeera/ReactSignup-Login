import { useEffect, useState } from "react"

function Home(){
    let [products, setProducts] = useState([])
  function fetchData(){
    //fetch('https://fakestoreapi.com/products')
    fetch('https://dummyjson.com/products')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      setProducts(data.products)
    })  
  }
  useEffect(()=>{
    fetchData()
  },[])
   return (
    <div>
        {
            products.map((product) => {
                return (
                    <div key={product.id}>
                        {/* <img src={product.image} alt="" height={100} /> */}
                        <img src={product.thumbnail} alt={product.title} height={100}/>
                        <h3>{product.title}</h3>
                        <h5>{product.description}</h5>
                    </div>
                )
            })
        }
    </div>
)
}
export default Home