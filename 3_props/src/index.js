import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const book1 = {
  head:"book1",
  desc:"description 1"
}
const book2 = {
  head:"book2",
  desc:"description 2"
}
const book3 = {
  head:"book3",
  desc:"description 3"
}
// Alternatively we can create a list
const books = [
  {
    id:1,
    head:"book1",
    desc:"description 1"
  },
  {
    id:2,
    head:"book2",
    desc:"description 2"
  },
  {
    id:3,
    head:"book3",
    desc:"description 3"
  }
];
const Main = () => {
  return books.map((book) => {
    return <Card key={book.id} {...book}> </Card>
  });
  // Rendering one by one
  // return (
  //   <div>
  //     <Card head={book1.head} desc={book1.desc}>
  //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error non inventore nisi tenetur. Eius cupiditate vel autem fuga distinctio?</p>
  //     </Card>
  //     <Card head={book2.head} desc={book2.desc}/>
  //     <Card head={book3.head} desc={book3.desc}/>
  //   </div>
  // )
}

const Card = (props) => {
  const {head, desc, children} = props;
  return (
    <div>
      {/* <Head heading={props.head}/>
      <Body desc={props.desc}/> */}
      <h1>{head}</h1>
      <p>{desc}</p>
      {/* Children props */}
      {children} 
    </div>
  );
}



ReactDOM.render(<Main />, document.getElementById('root'));