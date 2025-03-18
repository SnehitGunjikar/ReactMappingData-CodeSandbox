import React from "react";
import { contacts } from "../contacts";
import Card from "../Card";

// function Card(prop) {
//   return (
//     <div>
//       <h2>{prop.name}</h2>
//       <img src="{prop.imgURL}" alt="" />
//       <p>{prop.phone}</p>
//       <p>{prop.email}</p>
//     </div>
//   );
// }

function CreateCard(contacts) {
  return (
    <Card
      // id={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      phone={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
