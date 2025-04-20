// Task 2: Created Dropdown Filter
import React, { useState } from "react";
 import Gallery from "./components/Gallery"; 
 import DestinationSelector from "./components/DestinationSelector"; 
 import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);

   const [selectedTour, setSelectedTour] = useState("all"); 
   const filteredTours = selectedTour === "all" ? tours : tours.filter((tour) => tour.name === selectedTour);
  
   const removeTour = (id) => { 
 
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // Filter out tour by id

    const updatedTours = tours.filter((tour) => tour.id !== id); // Update the tours state with the filtered tours
  };

   return(
     <main>
       <h1>Our Tour Options</h1>
 
       <Gallery tours={tours} setTours ={setTours} onRemove={removeTour} />
       </main>
   ); // This component renders the main application. It uses the Gallery and DestinationSelector components to display the tours and allow users to select a destination.
}

export default App