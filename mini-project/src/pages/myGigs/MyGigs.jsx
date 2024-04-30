import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import { mygigs } from "../../data";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: " a",
    isSeller: true,
  };


  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          <tbody>
          {mygigs.map((gig) => (
              <tr key={gig.id}>
                <td>
                  <img className="image" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt={gig.title} />
                </td>
                <td>{gig.title}</td>
                <td>${gig.price.toFixed(2)}</td>
                <td>
                  <img className="delete" src="./img/delete.png" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
