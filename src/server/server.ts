import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Node, Rule } from '../types/RuleTypes';

const app = express();
app.use(cors());
app.use(express.json());

const dbPromise = open({
  filename: './database.sqlite',
  driver: sqlite3.Database
});

async function initializeDatabase() {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS rules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      ast TEXT
    )
  `);
}

initializeDatabase();

app.post('/api/rules', async (req, res) => {
  const { name, ast } = req.body;
  const db = await dbPromise;
  const result = await db.run('INSERT INTO rules (name, ast) VALUES (?, ?)', name, JSON.stringify(ast));
  res.json({ id: result.lastID, name, ast });
});

app.get('/api/rules', async (req, res) => {
  const db = await dbPromise;
  const rules = await db.all('SELECT * FROM rules');
  res.json(rules.map(rule => ({ ...rule, ast: JSON.parse(rule.ast) })));
});

app.delete('/api/rules/:id', async (req, res) => {
  const { id } = req.params;
  const db = await dbPromise;
  await db.run('DELETE FROM rules WHERE id = ?', id);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});