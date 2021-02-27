import React from 'react';
import ReactDom from 'react-dom';

function Card() {
  return (
  <h4 style={{color: "red"}} className="heading">
    Hello I am a component
  </h4>
  );
}
const Para = () => (
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quisquam magni esse. Earum accusamus error mollitia, dolor natus, a nesciunt velit animi quos, cum assumenda ea unde maxime nulla maiores.</p>
);

// Nested component
const Banner = () =>{
  return (
    <div>
      <Image />
      <Text />
    </div>
  );
} 
const Image = () => (
  <img src="" alt="thumbnail"/>
)
const Text = () => (
  <div>
    <h1>Product Name</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum mollitia velit maxime numquam iure reprehenderit odio corrupti soluta magni, cumque dolor iste quia omnis dolores labore sit, perferendis nostrum vero.</p>
  </div>
)
// ReactDom.render(<Card />, document.getElementById('root'));
// ReactDom.render(<Para></Para>, document.getElementById('root'));
ReactDom.render(<Banner />, document.getElementById('root'));
