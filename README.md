# GitHub Profile Finder

GitHub Profile Finder is a simple, dynamic Next.js (15.0.2) application that allows users to search for GitHub profiles by location and username. With Axios and GitHub’s API, it retrieves profiles in real time based on user inputs. Whether you’re looking for a specific GitHub username or exploring developers in a certain city, this app provides a straightforward, interactive way to connect.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
  - [Home Page](#1-home-page)
  - [Profiles Page](#2-profiles-page)
- [How to Use](#how-to-use)
- [Installation](#installation)
- [Roadmap](#roadmap)
- [License](#license)

---

## Features

- **Profile Search by Username:** The main page includes a search form that fetches details of a specific GitHub profile by username.
- **City-Wide Search with Dynamic Inputs:** On the profiles page, enter a city location, and (optionally) a username to find all developers in that area.
- **Real-Time Data Handling:** Smooth user experience with real-time data fetching using `useEffect` and `useState` hooks.
- **Powered by Axios & GitHub API:** Efficient requests to GitHub’s API ensure fast responses.

---

## Tech Stack

- **Next.js** 15.0.2: For a modern, server-rendered React experience.
- **Axios:** For managing API requests to GitHub.
- **GitHub API:** For fetching real-time GitHub profile data.
- **React Hooks:** `useEffect` and `useState` for managing data and input handling.

---

## Pages

### 1. **Home Page**
   - Contains a search form for retrieving a specific GitHub user by username.
   - Simple and focused on individual user details.

### 2. **Profiles Page**
   - Includes two input fields:
      - **Location:** Search by city to find all GitHub users within that area.
      - **Username (Optional):** Filter results by adding a specific username if needed.
   - Displays all matching profiles dynamically, based on city and optional username input.

---

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/piratecoderz/github-profile-finder.git
   cd github-profile-finder
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm run dev
   ```

4. **Navigate to `http://localhost:3000`:**
   - Use the **Home Page** to search for a single GitHub profile by username.
   - Visit the **Profiles Page** to search profiles by location and filter by optional username.

---

## Installation

- Clone the repo and install dependencies.
- Configure your GitHub API access token for extended rate limits, if required.

---

## Roadmap

- [ ] Implement pagination for larger datasets.
- [ ] Improve UI with more detailed profile views.
- [ ] Add more filter options (e.g., programming language, followers).

---

## License

MIT License
