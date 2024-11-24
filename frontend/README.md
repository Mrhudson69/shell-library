# Shell Library Project

The Shell Library Project is a web application that allows users to post, share, and use shell scripts. The platform is built with React for the frontend, Node.js for the backend, and MySQL as the database. The main goal is to provide users with a place to share shell scripts, get approved by admins, and generate executable commands.

## Features (To Be Implemented)

- **Login Functionality**: The login functionality needs to be fixed.
- **Homepage**: A homepage needs to be created for users.
- **Profile Page**: Users will have a profile page where they can customize their details.
- **Logout Functionality**: Add logout functionality.
- **Post Shell Scripts**: Users will be able to post their shell scripts, and after admin approval, it will generate a unique URL (formatted like a Linux command) that allows anyone to use the script.
- **Admin Approval**: Shell scripts posted by users will require approval from admins before they are publicly available.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js
- **Database**: MySQL

## Development Server

To run the development server, which starts both the backend and the frontend, run the following commands in the project root directory:

1. Clone the repository:
   ```bash
   git clone https://github.com/Mrhudson69/shell-library-project.git
   cd shell-library-project
   ```

2. Install dependencies for both the backend and frontend:

   - For the backend (Node.js):
     ```bash
     cd backend
     npm install
     ```

   - For the frontend (React):
     ```bash
     cd frontend
     npm install
     ```

3. Start both the backend and frontend servers:
   ```bash
   # Open two terminals (one for frontend, one for backend)
   cd backend
   npm start
   ```

   ```bash
   cd frontend
   npm start
   ```

4. The backend will be running at `http://localhost:5000` and the frontend at `http://localhost:3000`.

## Contribution Guidelines 

Everyone is welcome to contribute to the project!

### Branches

- The main development happens on the `dev` branch.
- All pull requests should be made against the `dev` branch.

### Issues and Pull Requests

- When contributing, please create a descriptive issue if something is broken or needs enhancement.
- When making a pull request, ensure that your code follows the project's coding style, and is well-tested.
  
### Guidelines

- For new features or significant changes, please create an issue first.
- Write clear commit messages.
- Ensure the code is well-documented.
- Ensure the code does not break existing functionality (run tests if applicable).

## Current Status

This project is still in development. We are working to add the features mentioned above. It is **not yet in production**.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to check the issues and pull requests for updates and improvements. Let’s build something great together!
