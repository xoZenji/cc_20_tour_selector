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
  setTours((prevTours) => {
    const updatedTours = prevTours.filter((tour) => tour.id !== id); // Filter out tour by id

// Task 4: Reset View
    if (
      selectedTour !== "all" &&
      updatedTours.filter((tour) => tour.name === selectedTour).length === 0  
    ) {
      setSelectedTour("all");
    } // Reset selectedTour if no tours match the selected destination

    return updatedTours;
  }); // This function updates the tours state by filtering out the tour with the given id.
};

   return(
     <main>
       <h1>Our Tour Options</h1>
 
       <Gallery tours={tours} setTours ={setTours} onRemove={removeTour} />
       </main>
   ); // This component renders the main application. It uses the Gallery and DestinationSelector components to display the tours and allow users to select a destination.
}

export default App