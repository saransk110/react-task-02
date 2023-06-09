import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

function App() {
const data=[

{
  image:"https://rooter.lk/storage/phones/iphone-13-128/screenshot-2021-10-26-at-134548.png",
 name:"Apple iPhone 13 128gb/256gb",
  price:"₹ 70,000",
  rating:"⭐⭐⭐⭐",
},
{
  image:"https://m.media-amazon.com/images/I/71E5zB1qbIL._SX679_.jpg",
  name:"Apple iPhone 12 (64GB) - (Product) RED",
  price:"₹ 55,000",
  rating:"⭐⭐⭐⭐⭐",
},
{
  image:"https://m.media-amazon.com/images/I/61HHS0HrjpL._SX679_.jpg",
  name:"Apple iPhone 14 Pro (128 GB) - Deep Purple",
  price:"₹ 1,25,000",
  rating:"⭐⭐⭐⭐⭐",
},
{
  image:"https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
  name:"Apple iPhone 14 Pro Max (256 GB) - Silver",
  price:"₹ 1,45,000",
  rating:"⭐⭐⭐⭐",
},
{
  image:"https://m.media-amazon.com/images/I/71ZDY57yTQL._SX679_.jpg",
  name:"Apple iPhone 14 Pro (1 TB) - Gold",
  price:"₹ 1,75,000",
  rating:"⭐⭐⭐⭐⭐",
},
{
  image:"	https://m.media-amazon.com/images/I/61nPiOOv9BL._SX679_.jpg",
  name:"Apple iPhone 13 Mini (512GB) - Pink",
  price:"₹ 95,000",
  rating:"⭐⭐⭐⭐",
},
{
  image:"	https://m.media-amazon.com/images/I/5103Xi7yQgL._SX679_.jpg",
  name:"Apple iPhone 11 (64GB) - (Product) RED",
  price:"₹ 55,000",
  rating:"⭐⭐⭐⭐⭐",
},
{
  image:"https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX679_.jpg",
  name:"Apple iPhone 11 (128GB) - Green",
  price:"₹ 62,000",
  rating:"⭐⭐⭐⭐⭐",
}
]

const [count,setCount] =useState(0)

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
            
      
 
            </NavDropdown>
            
          </Nav>
          <Badge  bg="dark">
             CART {count}
         </Badge>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    <div class="div1">
      <h1 class="topic"><b>Shop Trendy iphones</b></h1>
      <h5>With this shop homepage template</h5>

    </div>


<div className="card-container">
  {data.map((value,index)=> <Cards
  index={index}
  value={value}
  setCount={setCount}
  count={count}
  />

  )}
     
    </div>
    </div>
  );
}

export default App;

function Cards({value ,index ,setCount ,count}){
const[show,setShow] =useState(false);
function addToCart(){
  setShow(!show)
  setCount(count + 1)
}
function removeToCart(){
  setShow(!show)
  setCount(count - 1)
}

return(
  <Card key={index} style={{ width: '18rem' }}>
  <Card.Img class="sarath" variant="top" src={value.image} />
  <Card.Body>
    <Card.Title>{value.name}</Card.Title>
    <Card.Text>{value.price}</Card.Text>
    <Card.Text>{value.rating}</Card.Text>
    


    {!show ? <Button variant="outline-dark" onClick={addToCart}>Add to cart</Button> : ""}

    {show ? <Button variant="danger" onClick={removeToCart}>Remove cart</Button> : ""}

  </Card.Body>
 </Card>

)
}