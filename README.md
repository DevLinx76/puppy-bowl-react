# Puppy Bowl React Application

## Overview

This React application serves as an interactive platform for the Puppy Bowl event, allowing users to view participating players, and their details, and manage player information through a dedicated API.

## Getting Started

This section guides you through getting the Puppy Bowl React application up and running on your local machine.

### Prerequisites

Ensure you have the following installed before you proceed:
- Node.js (version 14.0 or higher recommended)
- npm (version 6.0 or higher)


### Installation

Follow these steps to set up the project locally:

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Start the development server:
5. Open `http://localhost:3000` in your browser to view the application.


### API Usage

This project interacts with the "Puppy Bowl" API, which provides data on players, their owners, and teams. Ensure you're familiar with the [API documentation](<api-documentation-link>) to effectively use the routes available.

## Features

The application includes the following features:
- **List of Players**: Displays all puppies participating in the bowl.
- **Player Details**: Offers detailed information about each puppy on click.
- **Create Player**: Allows the addition of a new puppy to the competition.
- **Delete Player**: Enables the removal of a puppy (restrictions may apply).
- **Search**: Facilitates searching for players by name.


## Project Structure

```plaintext
puppy-bowl-react/
├── src/
│   ├── App.jsx
│   ├── API/
│   │   └── index.js
│   ├── components/
│   │   ├── AllPlayers.jsx
│   │   ├── NavBar.jsx (Optional)
│   │   ├── NewPlayerForm.jsx
│   │   └── SinglePlayer.jsx
│   └── main.jsx
└── index.css
```

## Routing

Implemented with React Router, the application includes routes to list all players, view details of individual players, and add new players.

## Deployment

This application is deployed on Netlify. Ensure you follow the correct build process with `npm run build` before deploying. For detailed deployment instructions, refer to the [DEPLOYMENT GUIDE](<deployment-guide-link>).

## Built With

- [React](https://reactjs.org/) - The web framework used.
- [Vite](https://vitejs.dev/) - Employed as the build tool for enhanced development experience.
- [React Router](https://reactrouter.com/) - Used for routing within the application.
- [Tailwind CSS](https://tailwindcss.com/) - Utilized for styling the application.

## Contributing

Contributions are welcome! If you have suggestions or want to contribute to the project, please feel free to make a pull request or open an issue.

