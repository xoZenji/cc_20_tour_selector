// Task 2: Created Dropdown Filter
import React, { useState } from "react";
 import Gallery from "./components/Gallery"; 
 import DestinationSelector from "./components/DestinationSelector"; 
 import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);

   const [selectedTour, setSelectedTour] = useState("all"); 
   const filteredTours = selectedTour === "all" ? tours : tours.filter((tour) => tour.name === selectedTour);
  
   return(
     <main>
       <h1>Our Tours</h1>
 
       <DestinationSelector tours={tours} selectedTour={selectedTour} setSelectedTour={setSelectedTour} />
       </main>
   ); // This component renders the main application. It uses the Gallery and DestinationSelector components to display the tours and allow users to select a destination.
}

export default App