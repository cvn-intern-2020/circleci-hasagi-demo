const converter = require("../converter") ;

test('convert F To C', function () {
    expect(converter.convertFToC(32)).toBe(0);
});