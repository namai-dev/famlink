import { Box } from "@mui/material";
import React, { useState } from "react";
import ItemList from "./ItemList";
import Item from "./Item";

const generateRandomItemList = (numberOfItems) => {
  const items = [];

  for (let i = 1; i <= numberOfItems; i++) {
    const randomPrice = (Math.random() * 100).toFixed(2); // Random price between 0 and 100
    const randomStock = Math.floor(Math.random() * 50) + 1; // Random stock between 1 and 50

    items.push({
      id: i,
      title: `Item ${i}`,
      description: `Description for Item ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      price: parseFloat(randomPrice),
      stock: randomStock,
    });
  }

  return items;
};

// Example: Generate a list of 10 random items
const randomItemList = generateRandomItemList(10);

console.log(randomItemList);

const Market = () => {
  const randomItemList = generateRandomItemList(10);
  return (
    <Box>
      <ItemList items={randomItemList} />
    </Box>
  );
};

export default Market;
