import React from "react";
import { Link } from "react-router-dom";

function Shop(props) {
  // console.log(props.itemsForSale);
  // console.log(props);
  // const priceList = [
  //   {
  //     id: 11116,
  //     price: 50,
  //     frame: 50,
  //   },
  //   {
  //     id: 36131,
  //     price: 30,
  //     frame: 25,
  //   },
  //   {
  //     id: 39901,
  //     price: 30,
  //     frame: 25,
  //   },
  //   {
  //     id: 265904,
  //     price: 25,
  //     frame: 20,
  //   },
  //   {
  //     id: 282234,
  //     price: 30,
  //     frame: 30,
  //   },
  //   {
  //     id: 266983,
  //     price: 25,
  //     frame: 25,
  //   },
  //   {
  //     id: 449534,
  //     price: 60,
  //     frame: 50,
  //   },
  //   {
  //     id: 625591,
  //     price: 400,
  //     frame: null,
  //   },
  //   {
  //     id: 337070,
  //     price: 25,
  //     frame: 20,
  //   },
  //   {
  //     id: 10946,
  //     price: 120,
  //     frame: 75,
  //   },
  //   {
  //     id: 751505,
  //     price: 100,
  //     frame: null,
  //   },
  //   {
  //     id: 827660,
  //     price: 30,
  //     frame: 30,
  //   },
  //   {
  //     id: 283099,
  //     price: 30,
  //     frame: 30,
  //   },
  //   {
  //     id: 13390,
  //     price: 25,
  //     frame: 25,
  //   },
  //   {
  //     id: 39737,
  //     price: 40,
  //     frame: null,
  //   },
  //   {
  //     id: 707455,
  //     price: 25,
  //     frame: 25,
  //   },
  //   {
  //     id: 10186,
  //     price: 60,
  //     frame: 60,
  //   },
  //   {
  //     id: 11227,
  //     price: 50,
  //     frame: 50,
  //   },
  //   {
  //     id: 262612,
  //     price: 35,
  //     frame: 35,
  //   },
  // ];

  return (
    <div>
      {/* <h1>choose among our curated replicas</h1> */}
      <div id="filter-container">
        <h4 id="filter-desc">filter by medium</h4>
        <div id="filter-btn-container">
          <button className="filter-btn" id="show-all">
            show all
          </button>
          <button className="filter-btn" id="show-photos">
            photos
          </button>
          <button className="filter-btn" id="show-textiles">
            textiles
          </button>
          <button className="filter-btn" id="show-paintings">
            paintings
          </button>
          <button className="filter-btn" id="show-other">
            other
          </button>
        </div>
      </div>
      <div className="shop-overall-container">
        {props.itemsForSale.map((item) => (
          <Link to={`/shop/${item.objectID}`} key={item.objectID}>
            <div className="shop-thumbnail-container">
              <div className="image-container">
                <img
                  className="shop-thumbnail-img"
                  src={item.primaryImageSmall}
                  alt={item.title}
                ></img>
              </div>
              <div className="info-container">
                <p>
                  {item.title} by{" "}
                  {item.artistDisplayName ? item.artistDisplayName : `unknown`}
                </p>
                <p>
                  {props.priceList.map((obj) => {
                    if (obj.id === item.objectID) {
                      if (obj.frame) {
                        return `$${obj.price} unframed / $${
                          obj.price + obj.frame
                        } framed`;
                      } else {
                        return `$${obj.price}, textile`;
                      }
                    }
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
