import React from "react";

const FlightSearch = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <input type="date" placeholder="Departure Date" />
        <input type="date" placeholder="Return Date" />
        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
};

export default FlightSearch;
