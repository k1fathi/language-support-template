import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-full">
      {/* Event Image */}
      <img
        src={event.image} // Use the card_image URL from the event data
        alt={event.description} // Use the event description as the alt text
        className="w-full h-48 object-cover"
      />

      {/* Event Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Event Date */}
        <p className="text-gray-500 text-sm mb-2">{event.date}</p>

        {/* Event Category */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {event.category}
        </h3>

        {/* Event Description */}
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>

        {/* Spacer to push the link to the bottom */}
        <div className="flex-grow"></div>

        {/* View Event Link */}
        <div className="text-right mt-4">
          <a
            href={event.url} // Link to the event URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            View Event →
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
