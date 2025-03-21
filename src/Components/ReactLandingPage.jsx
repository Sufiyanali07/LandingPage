import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import "../../src/index.css";

const HeroSection = lazy(() => import("./HeroSection"));

const ServiceCards = lazy(() => import("./ServiceCard"));
const PricingTable = lazy(() => import("./PricingTable"));
const ContactForm = lazy(() => import("./ContactForm"));

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = useCallback(
    debounce((term) => {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, 300),
    [users]
  );

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <Suspense
        fallback={
          <div className="text-center text-lg font-semibold">Loading...</div>
        }
      >
        <HeroSection />
        <ServiceCards />
        <PricingTable />
        <ContactForm />
      </Suspense>
      <div className="mt-8 p-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-4 font-serif">
          Search Users
        </h2>
        <input
          type="text"
          placeholder="Search Users..."
          className=" bg-white w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="mt-4 space-y-2">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="p-3 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition duration-200 cursor-pointer"
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
