import React from 'react'
import ProductCart from './ProductCart';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';



const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-tree-runnerjpg.jpg?c=16x9&q=h_720,w_1280,c_fill";

const Home = () => {

  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addtoCartHandler = (options) => {
    dispatch({
      type: "addToCart",
      payload: options
    })

    toast.success("Added to Cart");

    console.log(options);

  }
  return (
    <div className="home">
      {
        productList.map((i) => (
          <ProductCart
            key={i.id}
            name={i.name}
            price={i.price}
            imgSrc={i.imgSrc}
            id={i.id}
            handler={addtoCartHandler}
          />
        ))
      }

    </div>

  )
}

export default Home