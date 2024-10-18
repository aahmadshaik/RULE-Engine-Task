export interface Node {
  type: 'operator' | 'operand';
  left?: Node;
  right?: Node;
  value?: string | number;
  operator?: string;
  attribute?: string;
}

export interface Rule {
  id: number;
  name: string;
  ast: Node;
}