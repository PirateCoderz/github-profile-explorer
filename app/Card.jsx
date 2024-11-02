import React from 'react';

const Card = (props) => {
  const { profileData } = props;

  return (
    <section className="bg-gray-100 flex items-center justify-center p-5 pt-10">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 duration-300">
        {/* Profile Image */}
        <div className="p-5 flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-indigo-500"
            src={profileData?.avatar_url || '/default-avatar.png'}
            alt="Profile Picture"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">{profileData?.login || 'Username'}</h2>
          <p className="text-gray-600 text-sm text-center mt-2 px-4">
            {profileData?.bio || 'This user has no bio.'}
          </p>
        </div>

        {/* Profile Details */}
        <div className="flex justify-around bg-gray-50 border-t border-gray-200 p-4 text-center">
          <div className="text-gray-700">
            <p className="font-bold text-lg">{profileData?.public_repos || 0}</p>
            <p className="text-xs">Repositories</p>
          </div>
          <div className="text-gray-700">
            <p className="font-bold text-lg">{profileData?.followers || 0}</p>
            <p className="text-xs">Followers</p>
          </div>
          <div className="text-gray-700">
            <p className="font-bold text-lg">{profileData?.following || 0}</p>
            <p className="text-xs">Following</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
