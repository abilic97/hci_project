import React, { useState } from "react";
import styles from './style.module.css'

const nekiNiz = [
  { title: "Krema za lice", for: ["face"] },
  { title: "Krema za lice i ruke", for: ["face", "hands"] },
  { title: "Šampon za kosu", for: ["hair"] },
  { title: "Šampon za tijelo i kosu", for: ["hair", "body"] }
];

export default function Search() {
  const puniNiz = nekiNiz;
  const [arrayToShow, setArray] = useState(nekiNiz);
  const filters = ["face"];

  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchBox}
        onChange={(e) => {
          const value = e.target.value;
          const newArray = puniNiz.filter((el) => el.title.includes(value));
          setArray(newArray);
        }} placeholder="Search"
      />
    </div>
  );
}