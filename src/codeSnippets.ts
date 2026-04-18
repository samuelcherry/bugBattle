type TestCase = {
  input: any[];
  expected: any;
};

type Snippet = {
  code: string;
  functionName: string;
  tests: TestCase[];
};

export const codeSnippets: Record<string, Snippet> = {
  add_function: {
    code: `function add(a, b) {
  return a - b;
}`,
    functionName: "add",
    tests: [
      { input: [2, 3], expected: 5 },
      { input: [10, 5], expected: 15 },
    ],
  },

  multiply_missing_return: {
    code: `function multiply(a, b) {
  a * b;
}`,
    functionName: "multiply",
    tests: [
      { input: [2, 3], expected: 6 },
      { input: [4, 5], expected: 20 },
    ],
  },

  square_bug: {
    code: `function square(n) {
  return n * 2;
}`,
    functionName: "square",
    tests: [
      { input: [3], expected: 9 },
      { input: [5], expected: 25 },
    ],
  },
};
