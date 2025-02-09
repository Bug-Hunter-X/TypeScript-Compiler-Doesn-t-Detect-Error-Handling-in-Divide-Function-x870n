# TypeScript Compiler Doesn't Detect Error Handling

This repository demonstrates a scenario where the TypeScript compiler fails to detect a correctly implemented error handling mechanism within a function.  The `divide` function is designed to throw an error if the divisor is zero; however, the compiler does not flag this as a potential issue.

The bug lies in the assumption that the compiler will always identify potential runtime exceptions. This example highlights the limitations of static analysis in catching all runtime errors.

## How to Reproduce

1. Clone this repository.
2. Compile the TypeScript code using the TypeScript compiler (tsc).
3. Run the compiled JavaScript code.  Observe that the runtime error is correctly thrown, but the TypeScript compiler doesn't issue a warning.

## Solution

The solution, shown in `bugSolution.ts`, is to include runtime checks and ensure the code gracefully handles potential errors. While this particular example doesn't require changes to the existing code,  for larger projects, improving the compiler's error detection or adding runtime safeguards is beneficial. 