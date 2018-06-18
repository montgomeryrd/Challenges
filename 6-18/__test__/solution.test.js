'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let str1 = 'Is God willing to prevent evil but not able ?';

    it('should parse the string into "simple pig latin"', () => {
        expect(Solution(str1)).toEqual('sIay odGay illingway otay reventpay vileay utbay otnay bleaay ?');
    });

    let str2 = 'Then he is not omnipotent .';

    it('should parse the string into "simple pig latin"', () => {
        expect(Solution(str2)).toEqual('henTay ehay siay otnay mnipotentoay .');
    });

    let str3 = 'Is he able but not willing ?';

    it('should parse the string into "simple pig latin"', () => {
        expect(Solution(str3)).toEqual('sIay ehay bleaay utbay otnay illingway ?');
    });

    let str4 = 'Then he is malevolent .';

    it('should parse the string into "simple pig latin"', () => {
        expect(Solution(str4)).toEqual('henTay ehay siay alevolentmay .');
    });

    let str5 = 'Is he both able and willing ?';

    it('should parse the string into "simple pig latin"', () => {
        expect(Solution(str5)).toEqual('sIay ehay othbay bleaay ndaay illingway ?');
    });

    let str6 = 'Then whence cometh evil ?';

    it('should parse the string into "simple pig latin"', () => {
        expect(Solution(str6)).toEqual('henTay henceway omethcay vileay ?');
    });

    let str7 = 'Is he neither able nor willing ?';

    it('should parse the string into "simple pig latin"', () => {
        expect(Solution(str7)).toEqual('sIay ehay eithernay bleaay ornay illingway ?');
    });

    let str8 = 'Then why call him God !';

    it('should parse the string into "simple pig latin"', () => {
        expect(Solution(str8)).toEqual('henTay hyway allcay imhay odGay !');
    });
});