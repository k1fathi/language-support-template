import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CaseStudyCard = ({ study }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 h-[400px] flex flex-col">
      <img
        src={study.image}
        alt={study.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col h-full relative">
        <div>
          <h2 className="text-lg font-semibold mb-2 line-clamp-2">
            {study.title}
          </h2>
          <p className="bg-very_pale_blue text-gray-700 mb-3 pl-3 rounded-xl shadow-sm">
            <span className="font-semibold text-gray-900">Client:</span>{" "}
            {study.client}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-50 text-gray-500 px-1 py-0.5 rounded-sm text-xs italic">
              {study.industry}
            </span>
            <span className="bg-gray-50 text-gray-500 px-1 py-0.5 rounded-sm text-xs italic">
              {study.region}
            </span>
            <span className="bg-gray-50 text-gray-500 px-1 py-0.5 rounded-sm text-xs italic">
              {study.campaign}
            </span>
          </div>
        </div>

        <Link
          to={`/case-study/${study.id}`}
          className="absolute bottom-4 right-4 flex items-center text-blue_light-500 hover:text-blue_light-600 text-xs transition-colors duration-200 ease-in-out gap-2 cursor-pointer rounded-full px-2 py-1"
        >
          <span>Read More</span>
          <FaArrowRight className="inline-block" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;