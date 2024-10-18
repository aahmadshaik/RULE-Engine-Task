# RULE-Engine-Task

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/aahmadshaik/RULE-Engine-Task)
# Rule Engine with AST

##Deployment Link
https://rule-engine-task.vercel.app/


# Rule Engine with AST

## Overview

This project implements a 3-tier rule engine application using React for the frontend, Express.js for the backend API, and SQLite for data storage. The system uses an Abstract Syntax Tree (AST) to represent conditional rules, allowing for dynamic creation, combination, and modification of these rules.

## Features

- Create and manage rules using a simple string format
- Combine multiple rules into a single rule
- Evaluate user data against the combined rules
- Persistent storage of rules using SQLite database
- RESTful API for rule management

## Project Structure

```
rule-engine-ast/
├── src/
│   ├── components/
│   │   ├── RuleForm.tsx
│   │   ├── RuleList.tsx
│   │   └── EvaluationForm.tsx
│   ├── types/
│   │   └── RuleTypes.ts
│   ├── utils/
│   │   └── ruleEngine.ts
│   ├── server/
│   │   └── server.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Technologies Used

- Frontend: React 18.3.1, TypeScript 5.5.3, Vite 5.4.2, Tailwind CSS 3.4.1
- Backend: Express.js 4.18.2, Node.js 18+
- Database: SQLite 5.1.6
- Other: cors 2.8.5 for handling CORS, sqlite 5.1.6 for database operations

## Design Choices

1. **Frontend Framework**: React was chosen for its component-based architecture and efficient rendering, making it ideal for building interactive UIs.

2. **Backend Framework**: Express.js was selected for its minimalist approach and flexibility, allowing for quick setup of a RESTful API.

3. **Database**: SQLite was chosen for its serverless nature and ease of setup, making it perfect for small to medium-scale applications.

4. **State Management**: React's built-in useState and useEffect hooks are used for state management, avoiding the complexity of additional state management libraries for this small-scale application.

5. **API Communication**: The frontend communicates with the backend using RESTful API calls, ensuring a clear separation of concerns.

6. **Rule Representation**: Rules are represented as Abstract Syntax Trees (ASTs) to allow for complex rule combinations and efficient evaluation.

## Prerequisites

- Node.js (v18 or later)
- npm (v7 or later)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/rule-engine-ast.git
   cd rule-engine-ast
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   PORT=3001
   DATABASE_PATH=./database.sqlite
   ```

4. Initialize the database:
   ```
   npm run init-db
   ```

5. Build the frontend:
   ```
   npm run build
   ```

6. Start the server:
   ```
   npm start
   ```

The application will be available at `http://localhost:3001`.

## Development Setup

1. Start the backend development server:
   ```
   npm run dev:server
   ```

2. In a separate terminal, start the frontend development server:
   ```
   npm run dev:client
   ```

The frontend will be available at `http://localhost:5173`, and it will proxy API requests to the backend at `http://localhost:3001`.

## Docker Setup

To run the application using Docker:

1. Build the Docker image:
   ```
   docker build -t rule-engine-ast .
   ```

2. Run the container:
   ```
   docker run -p 3001:3001 -d rule-engine-ast
   ```

The application will be available at `http://localhost:3001`.

## Usage

### Creating Rules

1. Navigate to the main page of the application.
2. Use the Rule Form to create new rules. Enter a rule string in the format:
   ```
   attribute operator value [AND|OR attribute operator value]...
   ```
   Example: `age > 30 AND department = Sales OR experience > 5`

3. Click "Add Rule" to create the rule.

### Managing Rules

- View existing rules in the "Current Rules" section.
- Delete rules by clicking the "Delete" button next to each rule.

### Evaluating Rules

1. Scroll to the "Evaluate Rules" section.
2. Fill in the form with sample user data (age, department, salary, experience).
3. Click "Evaluate" to see if the user data meets the criteria set by the combined rules.

## API Endpoints

- `POST /api/rules`: Create a new rule
  - Body: `{ "name": "Rule Name", "ruleString": "age > 30 AND department = Sales" }`
- `GET /api/rules`: Retrieve all rules
- `DELETE /api/rules/:id`: Delete a specific rule

## Rule Engine Logic

The rule engine uses an Abstract Syntax Tree (AST) to represent and evaluate rules:

- `createRule`: Parses a rule string and creates an AST
- `combineRules`: Combines multiple rule ASTs into a single AST
- `evaluateRule`: Evaluates a rule AST against provided user data

## Testing

Run the test suite with:

```
npm test
```

This will run unit tests for the rule engine logic and integration tests for the API endpoints.

## Future Enhancements

1. Implement error handling for invalid rule strings or data formats
2. Add validations for attributes to be part of a predefined catalog
3. Allow modification of existing rules
4. Extend the system to support user-defined functions within the rule language
5. Implement more complex rule parsing to handle parentheses and precedence
6. Add user authentication and authorization
7. Implement rule versioning and history

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Troubleshooting

If you encounter any issues during setup or runtime, please check the following:

1. Ensure all dependencies are correctly installed
2. Verify that the SQLite database file has been created and is writable
3. Check that the correct environment variables are set
4. Ensure no other services are running on the specified ports

If problems persist, please open an issue on the GitHub repository with a detailed description of the problem and steps to reproduce it.
