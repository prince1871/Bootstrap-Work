import React from "react";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./components/Description";
import Image from "./Components/Image";
import { Card, Button } from "react-bootstrap";

// You can set a first name variable
const firstName = "John"; // or null for "Hello, there!"

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Product Details</Card.Title>
          <Name />
          <Price />
          <Description />
          <Image />
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <div>
        {firstName ? (
          <>
            <h2>Hello, {firstName}!</h2>
            <img src="/assets/images/Profile.jpg" alt="Profile" />
          </>
        ) : (
          <h2>Hello, there!</h2>
        )}
      </div>
    </div>
  );
};

export default App;