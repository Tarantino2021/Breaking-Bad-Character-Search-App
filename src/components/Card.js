import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Button from "@material-ui/core/Button";
import { useMyContext } from "../context/contextProvider";

function Card({ item }) {
  //context
  const { addtoList, list } = useMyContext();

  //check if i have the item in myList
  const inMyList = (char) => {
    return !!list.find((item) => item.id === char.id);
  };

  //animation logic
  const [hover, setHover] = useState(false);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [12, -9]);
  const rotateY = useTransform(x, [0, 400], [12, -10]);

  function handleMouse(event) {
    var rect = event.target.getBoundingClientRect();
    x.set(event.clientX - rect.left); //x position within the element.
    y.set(event.clientY - rect.top); //y position within the element.
  }

  return (
    <div className="card_top">
      <motion.img
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouse}
        style={{
          rotateX: hover ? rotateX : 0,
          rotateY: hover ? rotateY : 0,
          perspective: 1000,
        }}
        src={item.img}
      />
      <div className="card_text_top">
        <h1>{item.name}</h1>
        <span>Nickname: {item.nickname}</span>
      </div>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => addtoList(item)}
      >
        ADD TO CART
      </Button>
    </div>
  );
}

export default Card;
