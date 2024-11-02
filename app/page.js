'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Card from './Card';

export default function Home() {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!username) return;
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setProfileData(null);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 flex gap-4 items-center p-5 rounded-lg shadow-lg">
        <input
          type="text"
          className="bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none p-3 rounded-lg shadow-md transition-all duration-200 ease-in-out hover:shadow-lg w-full sm:max-w-xs"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="rounded-lg transition-all duration-200 ease-in-out bg-indigo-700 text-white px-6 py-2 shadow-md hover:bg-indigo-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* Show loader if loading, otherwise show the card with profile data */}
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        profileData && <Card profileData={profileData} />
      )}
    </div>
  );
}
