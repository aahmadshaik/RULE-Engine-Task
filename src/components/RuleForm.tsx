import React, { useState } from 'react';
import { createRule } from '../utils/ruleEngine';

interface RuleFormProps {
  onSubmit: (rule: string) => void;
}

const RuleForm: React.FC<RuleFormProps> = ({ onSubmit }) => {
  const [ruleString, setRuleString] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      createRule(ruleString); // Validate the rule
      onSubmit(ruleString);
      setRuleString('');
    } catch (error) {
      alert('Invalid rule string. Please check the format.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="ruleString" className="block text-sm font-medium text-gray-700">
          Rule String
        </label>
        <input
          type="text"
          id="ruleString"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="e.g., age > 30 AND department = Sales"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Rule
      </button>
    </form>
  );
};

export default RuleForm;