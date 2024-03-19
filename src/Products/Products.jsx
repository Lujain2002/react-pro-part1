import React , {useEffect,useState }from 'react';
import axios from 'axios';
import './products.css'
import { useParams} from 'react-router-dom'

export default function Products() {
  const {id}=useParams();
  const [product,setProduct]= useState([]);
  
  
  const getProduct = async ()=>{
    const data = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${id}`);
    
    console.log(data.data.products);
    setProduct(data.data.products);
   
   
  }
  useEffect(()=>{
     getProduct();
  },[])

 
  
  return (
   <>
   <div className="row">
   {
    product.map(pro=>
      <div  className="product"key={pro._id}>
        <img src={pro.mainImage.secure_url}/>
        <h2>{pro.name}</h2>
        <p>{pro.slug}</p>
        <span>{pro.price}$</span>

      </div>
    )
   }
   </div>
 
   </>
  )
}
