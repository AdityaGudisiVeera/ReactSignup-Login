import { useEffect, useState } from "react"
import "./Home.css"

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
    <main className="home-page">
      <section className="home-hero">
        <div>
          <p className="home-eyebrow">Curated daily</p>
          <h1>Small upgrades for everyday living.</h1>
          <p className="home-intro">Explore practical finds, thoughtful details, and products made to fit beautifully into your routine.</p>
        </div>
        <div className="home-stat">
          <strong>{products.length || "--"}</strong>
          <span>products to explore</span>
        </div>
      </section>
      <section className="product-grid" aria-label="Product collection">
        {
            products.map((product) => {
                return (
                    <article className="product-card" key={product.id}>
                        <div className="product-image-wrap">
                          <img src={product.thumbnail} alt={product.title}/>
                        </div>
                        <div className="product-card-content">
                          <span className="product-category">{product.category}</span>
                          <h2>{product.title}</h2>
                          <p>{product.description}</p>
                          <div className="product-meta">
                            <strong>${product.price.toFixed(2)}</strong>
                            <span>★ {product.rating}</span>
                          </div>
                        </div>
                    </article>
                )
            })
        }
      </section>
      {!products.length && <p className="product-loading">Loading the collection...</p>}
    </main>
)
}
export default Home