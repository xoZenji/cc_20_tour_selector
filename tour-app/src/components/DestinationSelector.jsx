import React from "react";
  
  const DestinationSelector = ({ tours, selectedTour, setSelectedTour }) => {
      return (
          <div classname = "destination-selector"> 
  
              <label htmlFor="destination">Pick a Destination:</label> 
  
              <select id="destination" value={selectedTour} onChange={(e) => setSelectedTour(e.target.value)}> 
  
                  <option value="all">All</option>
  
                  {tours.map((tour) => ( 
                  
                      <option key={tour.id} value={tour.destination}>{tour.destination}</option> 
                  ))}
              </select>
          </div>
      );
 } // This component renders a dropdown menu for selecting a destination. It uses the tours array to populate the options and updates the selected tour.
  
  export default DestinationSelector;