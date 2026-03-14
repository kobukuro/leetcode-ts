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
│   ├── problems/
│   │   ├── easy/       # Easy difficulty problems
│   │   ├── medium/     # Medium difficulty problems
│   │   └── hard/       # Hard difficulty problems
│   └── common/         # Shared data structures (TreeNode, etc.)
└── docs/               # Detailed problem lists
```

Each problem follows this structure:
```
{difficulty}/{number}-{problem-name}/
├── solution.ts         # Solution implementation
└── solution.test.ts    # Test cases
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

📊 **Statistics**: 15 problems solved

| Difficulty | Count |
|------------|-------|
| Easy       | 11    |
| Medium     | 3     |
| Hard       | 1     |

### Browse by Difficulty

- 📗 [Easy Problems](docs/EASY.md)
- 📘 [Medium Problems](docs/MEDIUM.md)
- 📕 [Hard Problems](docs/HARD.md)

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
