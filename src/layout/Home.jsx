import React, { useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";
import ItemCards from "../page/items/ItemCards";

const Home = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_apiUrl}/getItems`)
      .then((res) => setItems(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {items?.map((item) => (
          <ItemCards item={item}></ItemCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
