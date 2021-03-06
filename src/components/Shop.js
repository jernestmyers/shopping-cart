import React, { useState } from "react";
import { Link } from "react-router-dom";

function Shop(props) {
  const [filteredItems, setFilteredItems] = useState(props.itemsForSale);

  const filterItems = (e) => {
    const filterBtns = document.querySelectorAll(`.filter-btn`);
    filterBtns.forEach((btn) => {
      btn.classList.remove(`filter-selected`);
    });

    setFilteredItems(
      props.itemsForSale.filter((item) => {
        if (
          item.classification === `Photographs` &&
          e.target.id === `show-photos`
        ) {
          return true;
        } else if (
          (item.classification.includes(`Textiles`) ||
            item.medium.includes(`silk`)) &&
          e.target.id === `show-textiles`
        ) {
          return true;
        } else if (
          (item.classification.includes(`Paintings`) ||
            item.medium.includes(`Oil`) ||
            item.medium.includes(`Watercolor`)) &&
          e.target.id === `show-paintings`
        ) {
          return true;
        } else if (
          (!item.medium ||
            item.classification === `Codices` ||
            item.classification === `Cut Paper`) &&
          e.target.id === `show-other`
        ) {
          return true;
        } else if (e.target.id === `show-all`) {
          return true;
        }
      })
    );

    e.target.classList.add(`filter-selected`);
  };

  const handlePathname = (e) => {
    const linkClicked = e.target.closest(`a`).className;
    const itemPathname = e.target.closest(`a`).attributes.href.nodeValue;
    if (linkClicked === `link-to-item`) {
      props.setCurrentPath(itemPathname);
    }
  };

  return (
    <div className="content-container">
      <div id="filter-container">
        <h4 id="filter-desc">filter by medium</h4>
        <div id="filter-btn-container">
          <button
            onClick={filterItems}
            className="filter-btn filter-selected"
            id="show-all"
          >
            show all
          </button>
          <button onClick={filterItems} className="filter-btn" id="show-photos">
            photos
          </button>
          <button
            onClick={filterItems}
            className="filter-btn"
            id="show-textiles"
          >
            textiles
          </button>
          <button
            onClick={filterItems}
            className="filter-btn"
            id="show-paintings"
          >
            paintings
          </button>
          <button onClick={filterItems} className="filter-btn" id="show-other">
            other
          </button>
        </div>
      </div>
      <div className="shop-overall-container">
        {filteredItems.map((item) => (
          <Link
            className="link-to-item"
            onClick={handlePathname}
            to={`/shopping-cart/shop/${item.objectID}`}
            key={item.objectID}
          >
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
