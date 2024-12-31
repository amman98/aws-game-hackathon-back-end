# aws-game-hackathon-back-end

## Description
[Add a brief description of your project here]

## Prerequisites
- Node.js (version X.X.X or higher)
- MySQL (version X.X.X or higher)
- npm (usually comes with Node.js)

## Installation
Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd aws-game-hackathon-back-end

2. Install dependencies:
   `npm install`

3. Set up the database:
    - Navigate to the db folder
    - Run the schema.sql file in your MySQL environment:
        - `mysql -u your_username -p < db/schema.sql`

4. Configure environment variables:
    - Create a .env file in the root directory
    - Add the following variables:
        - DB_HOST=localhost
        - DB_USER=your_database_username
        - DB_PASSWORD=your_database_password
        - DB_NAME=your_database_name
        - PORT=3001

5. Start the server:
    `node index.js`

6. The application should now be running at http://localhost:3001
