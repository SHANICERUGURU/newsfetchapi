import React from "react"
const News = ({product}) => {
   
    return (
        <>
      
        <div className="card" style={{ width: '18rem', marginTop: '15px' }}>
        <img src={product.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
        <h3>{product.ai_tag}</h3>
          <p>{product.description}</p>
          <a href={product.link} class="btn btn-info">click to read more</a>
       </div>
      </div>
          
      </>
           
        )
      
    
}
export default News

