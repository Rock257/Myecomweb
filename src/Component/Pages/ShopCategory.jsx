import React from 'react'
import { useContext } from 'react'
import './shopcategory.css'
import ShopContext from '../Context/ShopContext'
import dropIcon  from '../Assets/dropdown_icon.png'
import Item from '../Item/Item'



export default function ShopCategory(props) {
  
const allProduct = useContext(ShopContext)


  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" /> 
      <div className="shopcategory-indexsort">
        <p><span>1 to 12</span> out of 36 product</p>
      </div>
      <div className="shotcateory-sort">
        Sort By <img src={dropIcon} alt="" />
      </div>
      <div className="shopcategory-products">
        {props.allProduct.map((item ,idx)=>{
          if(props.category === item.category){
             return(
              <Item key={idx}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}/>
          )
          }
         
        })}
      </div>
    </div>
  )
}
