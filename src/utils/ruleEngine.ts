import { Node } from '../types/RuleTypes';

export function createRule(ruleString: string): Node {
  // Implement the logic to parse the rule string and create an AST
  // This is a simplified version and doesn't handle all cases
  const tokens = ruleString.split(' ');
  const stack: Node[] = [];

  for (const token of tokens) {
    if (token === 'AND' || token === 'OR') {
      const right = stack.pop();
      const left = stack.pop();
      stack.push({ type: 'operator', operator: token, left, right });
    } else {
      const [attribute, operator, value] = token.split(/([><=])/);
      stack.push({ type: 'operand', attribute, operator, value });
    }
  }

  return stack[0];
}

export function combineRules(rules: Node[]): Node {
  // Implement the logic to combine multiple rules into a single AST
  if (rules.length === 0) return null;
  if (rules.length === 1) return rules[0];

  return {
    type: 'operator',
    operator: 'AND',
    left: rules[0],
    right: combineRules(rules.slice(1))
  };
}

export function evaluateRule(node: Node, data: Record<string, any>): boolean {
  if (node.type === 'operand') {
    const { attribute, operator, value } = node;
    const dataValue = data[attribute];

    switch (operator) {
      case '>': return dataValue > Number(value);
      case '<': return dataValue < Number(value);
      case '=': return dataValue === value;
      default: return false;
    }
  }

  if (node.type === 'operator') {
    const leftResult = evaluateRule(node.left, data);
    const rightResult = evaluateRule(node.right, data);

    return node.operator === 'AND' ? leftResult && rightResult : leftResult || rightResult;
  }

  return false;
}