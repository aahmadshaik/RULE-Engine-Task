import React from 'react';
import { Rule } from '../types/RuleTypes';

interface RuleListProps {
  rules: Rule[];
  onDelete: (id: number) => void;
}

const RuleList: React.FC<RuleListProps> = ({ rules, onDelete }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {rules.map((rule) => (
        <li key={rule.id} className="py-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">{rule.name}</span>
          <button
            onClick={() => onDelete(rule.id)}
            className="ml-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RuleList;