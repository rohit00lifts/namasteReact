import React from 'react';
import ReactDOM from 'react-dom/client';
const restData=[
  {
    "id": 1,
    "name": "Paradise Biryani",
    "rating": 4.2,
    "delivery_time_mins": 35,
    "cost_for_two": 800,
    "cuisine": "Biryani, North Indian",
    "image_url": "https://placehold.jp/3d4070/ffffff/300x200.png?text=Paradise+Biryani"
  },
  {
    "id": 2,
    "name": "Absolute Barbecues",
    "rating": 4.5,
    "delivery_time_mins": 50,
    "cost_for_two": 1800,
    "cuisine": "BBQ, Grill, Continental",
    "image_url": "https://placehold.jp/24/521e1e/ffffff/300x200.png?text=Absolute+Barbecues"
  },
  {
    "id": 3,
    "name": "Bawarchi",
    "rating": 4.4,
    "delivery_time_mins": 40,
    "cost_for_two": 750,
    "cuisine": "Hyderabadi Biryani, Kebabs",
    "image_url": "https://placehold.jp/24/1e5225/ffffff/300x200.png?text=Bawarchi"
  },
  {
    "id": 4,
    "name": "California Burrito",
    "rating": 4.6,
    "delivery_time_mins": 25,
    "cost_for_two": 450,
    "cuisine": "Mexican, Fast Food",
    "image_url": "https://placehold.jp/24/524d1e/ffffff/300x200.png?text=California+Burrito"
  },
  {
    "id": 5,
    "name": "The Spicy Venue",
    "rating": 4.3,
    "delivery_time_mins": 45,
    "cost_for_two": 1200,
    "cuisine": "Andhra, North Indian",
    "image_url": "https://placehold.jp/24/521e4b/ffffff/300x200.png?text=The+Spicy+Venue"
  },
  {
    "id": 6,
    "name": "Pista House",
    "rating": 4.1,
    "delivery_time_mins": 30,
    "cost_for_two": 600,
    "cuisine": "Bakery, Desserts",
    "image_url": "https://placehold.jp/24/1e3b52/ffffff/300x200.png?text=Pista+House"
  },
  {
    "id": 7,
    "name": "Shah Ghouse",
    "rating": 4.0,
    "delivery_time_mins": 40,
    "cost_for_two": 700,
    "cuisine": "Mughlai, Chinese",
    "image_url": "https://placehold.jp/24/333333/ffffff/300x200.png?text=Shah+Ghouse"
  },
  {
    "id": 8,
    "name": "Punjab Grill",
    "rating": 4.0,
    "delivery_time_mins": 55,
    "cost_for_two": 2200,
    "cuisine": "North Indian",
    "image_url": "https://placehold.jp/24/7a3131/ffffff/300x200.png?text=Punjab+Grill"
  },
  {
    "id": 9,
    "name": "Cream Stone",
    "rating": 4.7,
    "delivery_time_mins": 20,
    "cost_for_two": 500,
    "cuisine": "Ice Cream, Desserts",
    "image_url": "https://placehold.jp/24/521e3d/ffffff/300x200.png?text=Cream+Stone"
  },
  {
    "id": 10,
    "name": "Chutneys",
    "rating": 4.4,
    "delivery_time_mins": 30,
    "cost_for_two": 900,
    "cuisine": "South Indian, Vegetarian",
    "image_url": "https://placehold.jp/24/1e524d/ffffff/300x200.png?text=Chutneys"
  },
  {
    "id": 11,
    "name": "Subway",
    "rating": 4.2,
    "delivery_time_mins": 25,
    "cost_for_two": 500,
    "cuisine": "Healthy Food, Sandwiches",
    "image_url": "https://placehold.jp/24/1e521f/ffffff/300x200.png?text=Subway"
  },
  {
    "id": 12,
    "name": "Starbucks Coffee",
    "rating": 4.5,
    "delivery_time_mins": 20,
    "cost_for_two": 900,
    "cuisine": "Beverages, Cafe",
    "image_url": "https://placehold.jp/24/006241/ffffff/300x200.png?text=Starbucks"
  },
  {
    "id": 13,
    "name": "Amoroso",
    "rating": 4.5,
    "delivery_time_mins": 40,
    "cost_for_two": 800,
    "cuisine": "Continental, Chinese",
    "image_url": "https://placehold.jp/24/523e1e/ffffff/300x200.png?text=Amoroso"
  },
  {
    "id": 14,
    "name": "Theeram Kitchen",
    "rating": 4.6,
    "delivery_time_mins": 45,
    "cost_for_two": 1000,
    "cuisine": "South Indian, Seafood",
    "image_url": "https://placehold.jp/24/1e2652/ffffff/300x200.png?text=Theeram+Kitchen"
  },
  {
    "id": 15,
    "name": "Flechazo",
    "rating": 4.3,
    "delivery_time_mins": 55,
    "cost_for_two": 1500,
    "cuisine": "Asian, Mediterranean",
    "image_url": "https://placehold.jp/24/521e1e/ffffff/300x200.png?text=Flechazo"
  }
]
let Header=()=>{return(
    <div className='headerCont'>
        <img alt="no img available" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFDGAliLyQLCSw-CPMiG9NK_7siB2rZzM_A&s' 
        width={'5%'} />
        <h2>Namaste Hotel</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
)}
const Search=()=>(
         <div className='searchCont'>
            <input type='text' placeholder='Enter the restaurant name'/>
            <button>Search</button>
        </div>)

const Cards=({restaurantData})=>{
          console.log(restaurantData)
         let  {image_url,name,cuisine,rating,delivery_time_mins,id}=restaurantData
          return(<div className='restCards'>
            <img width='100%' alt="not available" src={image_url} />
            <h2>{name}</h2>
            <h3>{cuisine}</h3>
            <h4>rating:{rating}</h4>
            <h5>delivery time: {delivery_time_mins} minutes</h5>
            </div>)}
let Body=()=>{
    return(
        <div className='restCont'>
            {restData.map((resData)=>{
                return(
                    <Cards key={resData.id} restaurantData={resData} />
            )
            })} 
        </div>
)}
let AppLayout =()=>{return (<div>
    <Header/>
    <Search/>
    <Body/>
</div>)};
let root = ReactDOM.createRoot(document.querySelector('body'));
root.render(<AppLayout/>)