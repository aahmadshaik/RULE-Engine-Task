import React, { useState, useEffect } from 'react';
import RuleForm from './components/RuleForm';
import RuleList from './components/RuleList';
import EvaluationForm from './components/EvaluationForm';
import { Rule } from './types/RuleTypes';
import { createRule, combineRules, evaluateRule } from './utils/ruleEngine';

function App() {
  const [rules, setRules] = useState<Rule[]>([]);
  const [combinedRule, setCombinedRule] = useState<Rule | null>(null);
  const [evaluationResult, setEvaluationResult] = useState<boolean | null>(null);

  useEffect(() => {
    if (rules.length > 0) {
      const combined = combineRules(rules.map(r => r.ast));
      setCombinedRule({ id: 0, name: 'Combined Rule', ast: combined });
    } else {
      setCombinedRule(null);
    }
  }, [rules]);

  const handleAddRule = (ruleString: string) => {
    const newRule: Rule = {
      id: Date.now(),
      name: `Rule ${rules.length + 1}`,
      ast: createRule(ruleString)
    };
    setRules([...rules, newRule]);
  };

  const handleDeleteRule = (id: number) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const handleEvaluate = (data: Record<string, any>) => {
    if (combinedRule) {
      const result = evaluateRule(combinedRule.ast, data);
      setEvaluationResult(result);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Rule Engine with AST</h1>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <RuleForm onSubmit={handleAddRule} />
              </div>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">Current Rules</h2>
                <RuleList rules={rules} onDelete={handleDeleteRule} />
              </div>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-xl font-semibold mb-4">Evaluate Rules</h2>
                <EvaluationForm onEvaluate={handleEvaluate} />
                {evaluationResult !== null && (
                  <div className={`mt-4 p-4 rounded-md ${evaluationResult ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    Evaluation Result: {evaluationResult ? 'Eligible' : 'Not Eligible'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;