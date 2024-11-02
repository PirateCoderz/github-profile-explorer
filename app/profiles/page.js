
import Head from 'next/head';


// import ProfileCard from "@/components/ProfileCards";

import GithubProfiles from "@/components/GithubProfiles";

export default function Home() {
  return (
    // <ProfileCard />
    <>
      <Head>
        <title>GitHub Profiles Search</title>
        <meta name="description" content="Search for GitHub profiles by username and location." />
      </Head>

      <GithubProfiles />
    </>
  )
};
