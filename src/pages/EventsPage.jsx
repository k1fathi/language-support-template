import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard"; // Assuming you have an EventCard component

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    date: "",
  });

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter events based on selected filters
  const filteredEvents = events.filter((event) => {
    return (
      (filters.category === "" || event.category === filters.category) &&
      (filters.date === "" || event.date === filters.date)
    );
  });

  // Get unique options for dropdowns dynamically
  const getOptions = (key) => {
    return [...new Set(events.map((event) => event[key]))];
  };

  return (
    <section>
      <div className="text-center mb-8 md:mb-16">
        <span className="gradient-text">Events and Announcements</span>
        <p className="text-gray-700 mt-4 text-lg">
          Explore the latest events, announcements, and updates from ZUZZUU.
        </p>
      </div>

      <div className="bg-white rounded-xl p-2">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full max-w-xs p-3 border border-gray-300 rounded-full"
          >
            <option value="">Select Category</option>
            {getOptions("category").map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
            className="w-full max-w-xs p-3 border border-gray-300 rounded-full"
          >
            <option value="">Select Date</option>
            {getOptions("date").map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-8 w-full md:max-w-[66%] mx-auto md:grid md:grid-cols-3 md:justify-items-center">
          {filteredEvents.map((event) => (
            <EventCard key={event.url} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
