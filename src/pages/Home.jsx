import React from "react";
import Features from "../components/Features";
import Subscribe from "../components/Subscribe";
import Button from "../components/Button";
import MaximizeUserSales from "../components/MaximizeUserSales";
import JoinThem from "../components/JoinThem";


const Home = () => (
  <div>
    <section id="discover_the_all_new_zuzzuu" className="mt-6">
      <div className="text-center">
        <a
          href="/features" // Replace with a valid URL or path
          className="discover-btn inline-block mb-5 px-5 py-2.5 bg-gray-800 text-white no-underline rounded-full font-bold"
        >
          Discover the all-new Zuzzuu ➔
        </a>
        <h1 className="text-4xl my-2.5 text-gray-800 font-bold">
          One Platform for
        </h1>
        <span className="gradient-text">Revenue Growth</span>
        <p className="description mb-5 text-gray-600">
          <span className="font-bold">
            One platform for all your needs, a hub for AI powered work:
          </span>
          <br />
          Customer Journeys, Goals, Clubs, Campaigns, Games and more.
        </p>
        <Button to="/contact">Start Now</Button>
      </div>
    </section>

    <Features />
    <JoinThem />
    <MaximizeUserSales />
    <Subscribe />
  </div>
);

export default Home;
