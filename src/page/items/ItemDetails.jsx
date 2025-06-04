import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemDetails = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_apiUrl}/getItem/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const {
    title,
    name,
    email,
    thumbnail,
    description,
    category,
    location,
    date,
    _id,
  } = item;
  return <div>
    <h1>{title}</h1>
    <h1>{name}</h1>
  </div>;
};

export default ItemDetails;
