'use client';

import React, { useState } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import Loader from './Loader';

function GithubProfiles() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('Faisalabad');
  const [profileData, setProfileData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!location) {
      setError('Please enter a location.');
      return;
    }

    setLoading(true);
    setError(null);
    setProfileData([]);

    // Build the query based on provided input

    let query = `location:${location}`;
    // Example when location is "Faisalabad":
    // location:Faisalabad

    if (username) {
      query += `+${username} in:username`;
      // Example when username is "piratecoderz":
      // location:Faisalabad+piratecoderz in:username

    }

    // Constructed Query Example:
    // Example when both inputs are provided:
    // location:Faisalabad+piratecoderz in:username


    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setProfileData(response.data.items || []);
    } catch (error) {
      setError(error.response?.data?.message || 'No users found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 flex gap-4 items-center p-5 rounded-lg shadow-lg">
        <input
          type="text"
          className="bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none p-3 rounded-lg shadow-md transition-all duration-200 ease-in-out hover:shadow-lg w-full sm:max-w-xs"
          placeholder="Enter GitHub username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none p-3 rounded-lg shadow-md transition-all duration-200 ease-in-out hover:shadow-lg w-full sm:max-w-xs"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="rounded-lg transition-all duration-200 ease-in-out bg-indigo-700 text-white px-6 py-2 shadow-md hover:bg-indigo-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mt-5">{error}</p>}

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-3 gap-6 mt-10">
          {profileData.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GithubProfiles;
