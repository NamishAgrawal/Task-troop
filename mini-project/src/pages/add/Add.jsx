import React, { useState } from "react";
import "./Add.scss";
import { mygigs } from "../../data";

const Add = () => {
  const [gigData, setGigData] = useState({
    title: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGigData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateGig = () => {
    const newGig = {
      id: mygigs.length + 1,
      title: gigData.title,
      price: parseFloat(gigData.price),
    };

    mygigs.push(newGig);
    console.log("New gig created:", newGig);
    console.log("form the mygigs: ", mygigs);

  };
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              value={gigData.title}
              onChange={handleInputChange}
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
            <button onClick={handleCreateGig}>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Price</label>
            <input type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              value={gigData.price}
              onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
