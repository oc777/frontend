import React from "react";
import PropTypes from "prop-types";
import MyUl from "./ul";
import MyOl from "./ol";

const ListCategories = ({ items }) => {
  // console.log(items);
  return (
    <div className="catslist">
      {items.map((item, index) => {
        let i = index + 1;
        const space = ". ";
        return (
          <div key={i}>
            <MyOl>{i}{space}{item.category}</MyOl>
            {item.sub !== null
              ? item.sub.map((subitem, n) => {
                  let subi = `${i}.${n + 1}`;
                  return (
                    <MyUl key={subitem.category}>
                      <li>{subi}{space}{subitem.category}</li>
                    </MyUl>
                  );
                })
              : null}
          </div>
        );
      })}
    </div>
  );
};

export default ListCategories;