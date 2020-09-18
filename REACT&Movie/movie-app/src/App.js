import React from 'react';
import PropTypes from 'prop-types'
import Potato from './Potato'

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    rating: 5,
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    rating: 4.5,
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id:3,
    name: "Bibimbap",
    rating: 3,
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id:4,
    rating: 4.3,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id:5,
    rating: 4.7,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function renderFood(dish){
  console.log(dish)
  return <Food name={dish.name} picture={dish.picture} />
}

function Food({ name, picture, rating}) {
  return <div>
    <h1>I like { name }</h1>
    <h4>{rating} / 5.0 </h4>
    <img src={picture} alt={name} />
  </div>; 
}

Food.propTypes = {

}

function App() {
  return (
  <div> 
    {foodILike.map(dish => (
      <Food 
        key={dish.id}  
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating}  
      />))}
    {/* {foodILike.map(renderFood)} */}
  </div>
  );
}

export default App;

// jsx, props