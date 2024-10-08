import { useState } from "react";
import { sculptureList } from "./data";
import "../gallery/gallery.css";

export default function Gallery() {
  //Estado para controlar los indices de los objetos.
  const [index, setIndex] = useState(0);

  //Estado para cofigurar el boton ver más.
  const [showMore, setShowMore] = useState(false);

  // Devuelve true o false
  const hasNext = index < sculptureList.length - 1;

  /*
  Funcion usada en el boton de siguiente, nos ayuda a cambiar el indice, 
  por lo tanto cambiamos de objeto y de img.
  */
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  /*
  Funcion usada en el boton de anterior, nos ayuda a cambiar el indice, 
  por lo tanto cambiamos de objeto y de img.
  */
  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      sculptureList.length - 1;
    }
  }

  //Funcion usada en el boton de ver más
  function handleMoreClick() {
    // ! Invierte el valor de showMore.
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <h2>Galeria de imagenes</h2>
      <button onClick={handlePreviousClick}>Anterior</button>
      <button onClick={handleNextClick}>Siguiente</button>
      <h3>{sculpture.name}</h3>
      <img src={sculpture.url} alt={sculpture.name} />
      <h5>
        {index + 1} of {sculptureList.length}
      </h5>
      <button onClick={handleMoreClick} className="details">
        {/* 
        Si showMore devuelve true significa que se estan mostrando los detalles, 
        por lo tanto en el boton deberia decir cerrar detalles y viceversa 
        */}
        {showMore ? "Cerrar" : "Ver"} detalles
      </button>
      {/* Si showMore devuelve true muestra lo que esta a su derecha, en este caso sculpture.description. */}
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
