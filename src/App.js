import React, { useState } from "react";

function App() {
  const [size, setSize] = useState(300); // Розмір зображення
  const [image, setImage] = useState("/img/запоріжжя.jpg"); // Початкове зображення

  // Збільшення розміру
  const increaseSize = () => {
    setSize((prevSize) => prevSize + 50);
  };

  // Зменшення розміру
  const decreaseSize = () => {
    setSize((prevSize) => (prevSize > 50 ? prevSize - 50 : prevSize)); // Мінімальний розмір 50px
  };

  // Заміна зображення
  const toggleImage = () => {
    setImage((prevImage) =>
      prevImage === "/img/запоріжжя.jpg" ? "/img/київ.jpg" : "/img/запоріжжя.jpg"
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Моє місто</h1>
      <img
        src={image}
        alt="City"
        style={{
          width: `${size}px`,
          height: "auto",
          transition: "width 0.3s ease",
          marginBottom: "20px",
        }}
      />
      <div>
        <button
          onClick={increaseSize}
          style={{
            padding: "10px 20px",
            margin: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Збільшити
        </button>
        <button
          onClick={decreaseSize}
          style={{
            padding: "10px 20px",
            margin: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Зменшити
        </button>
        <button
          onClick={toggleImage}
          style={{
            padding: "10px 20px",
            margin: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Змінити зображення
        </button>
      </div>
    </div>
  );
}

export default App;
