import {Worker} from 'worker_threads';
import * as path from 'path';
import * as fs from 'fs';
import * as ts from 'typescript';

const DEFAULT_TIMEOUT = 100;

function assertTimeoutPreemptively(
    matrix: number[][],
    timeoutMs: number
): Promise<number> {
    return new Promise((resolve, reject) => {
        const solutionPath = path.join(__dirname, 'solution.ts');
        const tsCode = fs.readFileSync(solutionPath, 'utf-8');
        const jsCode = ts.transpileModule(tsCode, {
            compilerOptions: {
                module: ts.ModuleKind.CommonJS,
                target: ts.ScriptTarget.ES2020
            }
        }).outputText;

        const worker = new Worker(
            `
            const { parentPort, workerData } = require('worker_threads');
            
            const module = { exports: {} };
            (function(exports, module) {
                ${jsCode}
            })(module.exports, module);
            
            const longestIncreasingPath = module.exports.longestIncreasingPath;
            
            try {
                const result = longestIncreasingPath(workerData.matrix);
                parentPort.postMessage({ success: true, result });
            } catch (error) {
                parentPort.postMessage({ success: false, error: error.message });
            }
            `,
            {
                eval: true,
                workerData: {matrix}
            }
        );

        const timeout = setTimeout(async () => {
            try {
                await worker.terminate();
            } catch (error) {

            }
            reject(new Error(`Test exceeded timeout of ${timeoutMs}ms and was terminated preemptively`));
        }, timeoutMs);

        worker.once('message', async (message) => {
            clearTimeout(timeout);
            try {
                await worker.terminate();
            } catch (error) {

            }
            if (message.success) {
                resolve(message.result);
            } else {
                reject(new Error(message.error));
            }
        });

        worker.once('error', async (error) => {
            clearTimeout(timeout);
            try {
                await worker.terminate();
            } catch (error) {

            }
            reject(error);
        });
    });
}

describe('longestIncreasingPath', () => {
    it('should return 4 for 3x3 matrix [[9,9,4],[6,6,8],[2,1,1]]', async () => {
        const matrix = [
            [9, 9, 4],
            [6, 6, 8],
            [2, 1, 1]
        ];
        const result = await assertTimeoutPreemptively(matrix, DEFAULT_TIMEOUT);
        expect(result).toBe(4);
    });

    it('should return 4 for 3x3 matrix [[3,4,5],[3,2,6],[2,2,1]]', async () => {
        const matrix = [
            [3, 4, 5],
            [3, 2, 6],
            [2, 2, 1]
        ];
        const result = await assertTimeoutPreemptively(matrix, DEFAULT_TIMEOUT);
        expect(result).toBe(4);
    });

    it('should return 1 for 1x1 matrix [[1]]', async () => {
        const matrix = [[1]];
        const result = await assertTimeoutPreemptively(matrix, DEFAULT_TIMEOUT);
        expect(result).toBe(1);
    });

    it('should return 140 for 15x10 snake matrix with increasing path', async () => {
        const matrix = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
            [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
            [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
            [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
            [59, 58, 57, 56, 55, 54, 53, 52, 51, 50],
            [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
            [79, 78, 77, 76, 75, 74, 73, 72, 71, 70],
            [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
            [99, 98, 97, 96, 95, 94, 93, 92, 91, 90],
            [100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
            [119, 118, 117, 116, 115, 114, 113, 112, 111, 110],
            [120, 121, 122, 123, 124, 125, 126, 127, 128, 129],
            [139, 138, 137, 136, 135, 134, 133, 132, 131, 130],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        const result = await assertTimeoutPreemptively(matrix, DEFAULT_TIMEOUT);
        expect(result).toBe(140);
    });
});