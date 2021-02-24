import React, { useState } from "react";
import styles from './style.module.css'

const nekiNiz = [
  { title: "Krema za lice", for: ["face"] },
  { title: "Krema za lice i ruke", for: ["face", "hands"] },
  { title: "Šampon za kosu", for: ["hair"] },
  { title: "Šampon za tijelo i kosu", for: ["hair", "body"] }
];

export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchBox} placeholder="Search"/>
    </div>
  );
}