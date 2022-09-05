import React from "react";
import './App.css';

import babyNamesData from "./babyNamesData.json";

function App() {

  const [names, setNames] = React.useState(babyNamesData);
  const [favourites, setFavourites] = React.useState([]);

  const addFavourite = (event) => {

    // console.log(`Adding a Favourite...`)    
    // console.log(`"names" array length BEFORE SPLICE : ${names.length}`)
    // console.log(`"favourites" array length BEFORE SPLICE: ${favourites.length}`)

    let indexOfNameObject = names.findIndex(element => element.name === event.target.innerText);
    // console.log(`index of the object in the "names" array to SPLICE ${indexOfNameObject}`);

    let nameObjectToMove = names[indexOfNameObject];
    // console.log(`contents of the object in the "names" array to SPLICE:`)
    // console.log(nameObjectToMove);

    // console.log(`adding the object to the "favourites" array`)
    setFavourites((prevFavourites) => {
      return [...prevFavourites, nameObjectToMove];
    });

    // console.log(`removing the object from the "names" array`)
    setNames((prevNames) => {  
      prevNames.splice(indexOfNameObject, 1);
      return prevNames;
    })

    // console.log(`"names" Array Length AFTER SPLICE : ${names.length}`)
    // console.log(`"favourites" array length AFTER SPLICE: ${favourites.length}`)
  }

  const removeFavourite = (event) => {

    // console.log(`Removing a Favourite...`)    
    // console.log(`"favourites" array length BEFORE SPLICE: ${favourites.length}`)
    // console.log(`"names" array length BEFORE SPLICE : ${names.length}`)

    let indexOfNameObject = favourites.findIndex(element => element.name === event.target.innerText);
    // console.log(`index of the object in the "favourites" array to SPLICE ${indexOfNameObject}`);

    let nameObjectToMove = favourites[indexOfNameObject];
    // console.log(`contents of the object in the "favourites" array to SPLICE:`)
    // console.log(nameObjectToMove);

    // console.log(`adding the object to the "names" array`)
    setNames((prevNames) => {
      return [...prevNames, nameObjectToMove];
    });

    // console.log(`removing the object from the "favourites" array`)
    setFavourites((prevFavourites) => {
      prevFavourites.splice(indexOfNameObject, 1);
      return prevFavourites;
    })

    // console.log(`"favourites" array length AFTER SPLICE: ${favourites.length}`)
    // console.log(`"names" Array Length AFTER SPLICE : ${names.length}`)
  }

  return (
    <div className="App">

      <div className="favourites-container">
        <span className="favourites-title">Favourites:</span>
        {favourites
          .map(element => {
            return (
              <span 
                key={element.id}
                className={`baby-name baby-sex-${element.sex}`}
                onClick={removeFavourite}
              >
                {element.name}
              </span>
            );
          })
        }
      </div>

      <div className="names-container">
        {names
          .sort((elementOne, elementTwo) => elementOne.name.localeCompare(elementTwo.name))
          // .filter(element => favourites.indexOf(element) === -1)
          .map(element => {
            return (
              <span 
                key={element.id} 
                className={`baby-name baby-sex-${element.sex}`}
                onClick={addFavourite}
              >
                {element.name}
              </span>
            );
          })
        }
      </div>

    </div>
  );
}

export default App;
