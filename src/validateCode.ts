type ValidationResult = {
  passed: boolean;
  results: string[];
};

export const validateCode = (
  code: string,
  functionName: string,
  tests: { input: any[]; expected: any }[],
): ValidationResult => {
  const results: string[] = [];

  try {
    const userFunction = new Function(`${code}; return ${functionName};`)();

    if (typeof userFunction !== "function") {
      return {
        passed: false,
        results: ["Function not defined correctly"],
      };
    }

    let allPassed = true;

    for (const test of tests) {
      try {
        const output = userFunction(...test.input);

        if (output === test.expected) {
          results.push(`Passed: ${functionName}(${test.input.join(", ")})`);
        } else {
          results.push(`Failed: expected ${test.expected}, got ${output}`);
          allPassed = false;
        }
      } catch (err: any) {
        results.push(`Runtime error: ${err.message}`);
        allPassed = false;
      }
    }

    return {
      passed: allPassed,
      results,
    };
  } catch (err: any) {
    return {
      passed: false,
      results: [`Syntax error: ${err.message}`],
    };
  }
};
