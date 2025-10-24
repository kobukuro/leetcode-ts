# LeetCode TypeScript Solutions

A collection of LeetCode problem solutions implemented in TypeScript with detailed complexity analysis and test coverage.

## Features

- **Type-Safe Solutions**: All solutions written in TypeScript with strict type checking enabled
- **Testing**: Full Jest test coverage for all solutions
- **Complexity Analysis**: Detailed time and space complexity documentation for each solution
- **Organized Structure**: Problems organized by difficulty level (Easy, Medium, Hard)
- **Tagged Solutions**: Solutions tagged with relevant data structures and algorithms

## Project Structure

```
leetcode-ts/
├── src/
│   └── problems/
│       ├── easy/
│       │   ├── 1-two-sum/
│       │   │   ├── solution.ts
│       │   │   └── solution.test.ts
│       │   └── 217-contains-duplicate/
│       │       ├── solution.ts
│       │       └── solution.test.ts
│       └── hard/
│           └── 329-longest-increasing-path-in-a-matrix/
│               ├── solution.ts
│               └── solution.test.ts
├── jest.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kobukuro/leetcode-ts.git
cd leetcode-ts
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests for a specific problem:
```bash
npm test -- 1-two-sum
```

## Solutions

### Easy
| # | Title | Tags | Solution | Tests |
|---|-------|------|----------|-------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Hash Table | [solution.ts](src/problems/easy/1-two-sum/solution.ts) | [solution.test.ts](src/problems/easy/1-two-sum/solution.test.ts) |
| 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Hash Set | [solution.ts](src/problems/easy/217-contains-duplicate/solution.ts) | [solution.test.ts](src/problems/easy/217-contains-duplicate/solution.test.ts) |

### Hard
| # | Title | Tags | Solution | Tests |
|---|-------|------|----------|-------|
| 329 | [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | DFS, Memoization | [solution.ts](src/problems/hard/329-longest-increasing-path-in-a-matrix/solution.ts) | [solution.test.ts](src/problems/hard/329-longest-increasing-path-in-a-matrix/solution.test.ts) |

## Technologies Used

- **TypeScript**: Static type checking and modern JavaScript features
- **Jest**: Testing framework
- **ts-jest**: TypeScript preprocessor for Jest

## TypeScript Configuration

This project uses strict TypeScript configuration:
- Target: ES2024
- Strict mode enabled
- Consistent casing in file names enforced

## Author

[Peter Chen](https://github.com/kobukuro)
