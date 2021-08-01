import React from "react";
import Contact from "../contacts";
import Avatar from "./Avatar";
import Details from "./details";

function Card(props){
  return <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
         <Avatar img ={props.img} />
        </div>
        <div className="bottom">
         <Details Phone = {props.Phone} email = {props.email}/>
        </div>
      </div>
  </div>
}
function makeCard(contact){
  return <div>
    <Card key={contact.id} name={contact.name} img={contact.img} Phone={contact.phone} email={contact.email}/>
  </div>
}

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    {Contact.map(makeCard)}
    </div> 
  );
}

export default App;
