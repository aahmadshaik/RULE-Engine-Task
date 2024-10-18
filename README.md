# RULE-Engine-Task

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/aahmadshaik/RULE-Engine-Task)
# Rule Engine with AST

## Overview

This project implements a simple 3-tier rule engine application using React for the frontend, Express.js for the backend API, and SQLite for data storage. The application uses an Abstract Syntax Tree (AST) to represent conditional rules and allows for dynamic creation, combination, and modification of these rules.

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

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Express.js, SQLite
- Database: SQLite
- Other: cors for handling CORS, sqlite for database operations

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

3. Start the development server:
   ```
   npm run dev
   ```

4. In a separate terminal, start the backend server:
   ```
   node src/server/server.ts
   ```

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
- `GET /api/rules`: Retrieve all rules
- `DELETE /api/rules/:id`: Delete a specific rule

## Rule Engine Logic

The rule engine uses an Abstract Syntax Tree (AST) to represent and evaluate rules:

- `createRule`: Parses a rule string and creates an AST
- `combineRules`: Combines multiple rule ASTs into a single AST
- `evaluateRule`: Evaluates a rule AST against provided user data

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

## License

This project is licensed under the MIT License.
