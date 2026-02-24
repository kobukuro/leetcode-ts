// Tags: Math
/**
 * Time complexity: O(1)
 * Space complexity: O(1)
 */
export function convertTemperature(celsius: number): number[] {
    return [celsius + 273.15, celsius * 1.8 + 32];
}