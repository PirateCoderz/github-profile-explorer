import React from 'react';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition hover:scale-105 duration-300 w-full flex flex-col sm:flex-row items-center gap-5">
      {/* Profile Image */}
      <img
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-indigo-500"
        src={profile.avatar_url}
        alt="Profile"
      />

      {/* Profile Details */}
      <div className="text-center sm:text-left flex-grow">
        {/* Username and Name */}
        <h2 className="text-2xl font-semibold text-gray-800">{profile.name || profile.login}</h2>
        <p className="text-gray-600 text-sm mt-1">@{profile.login}</p>
        
        {/* Bio */}
        {profile.bio && (
          <p className="text-gray-700 text-base mt-2">
            {profile.bio}
          </p>
        )}

        {/* Location and Company */}
        <div className="text-gray-600 mt-3 space-y-1">
          {profile.location && (
            <p>
              <span className="font-semibold">Location:</span> {profile.location}
            </p>
          )}
          {profile.company && (
            <p>
              <span className="font-semibold">Company:</span> {profile.company}
            </p>
          )}
        </div>

        {/* Repositories, Followers, Following */}
        {/* <div className="flex justify-around mt-5 text-gray-700">
          <div>
            <p className="font-bold text-lg">{profile.public_repos}</p>
            <p className="text-xs">Repositories</p>
          </div>
          <div>
            <p className="font-bold text-lg">{profile.followers}</p>
            <p className="text-xs">Followers</p>
          </div>
          <div>
            <p className="font-bold text-lg">{profile.following}</p>
            <p className="text-xs">Following</p>
          </div>
        </div> */}

        {/* Profile Link */}
        <p className="text-center sm:text-left mt-5">
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View GitHub Profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
