
export function verifyVisualComparison(results) {
    results.forEach(function (result) {
        expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
}