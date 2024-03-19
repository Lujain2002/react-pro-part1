import React, { useEffect,useState ,Link} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css'
import { NavLink } from 'react-router-dom';


export default function Categories() {
  const [products,setProducts]= useState([]);
  
  
  const getProducts = async ()=>{
    const response = await fetch(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
    const data = await response.json();
    console.log(data.categories);
    setProducts(data.categories);
   
   
  }
  useEffect(()=>{
     getProducts();
  },[])
  return (
   <>
     <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        products.map( product=>
          <SwiperSlide key={product._id}>
      


            <NavLink to={`products/${product._id}`}><img src={product.image.secure_url}/></NavLink>
          
            
          </SwiperSlide>

          )}
      
      
      ...
    </Swiper>

   </>
  )
}
