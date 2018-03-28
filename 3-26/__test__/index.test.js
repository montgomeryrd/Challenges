'use strict';

require('jest');

describe('FileNameExtractor.extractFileName()', () => {
    
    class FileNameExtractor {
        static extractFileName (dirtyFileName) {
            const regex = /\_(.*)\./;
    
            return regex.exec(dirtyFileName)[1];
        }
    }

    let valid1 = '1994_chiann_desiree.segars.extension'
    let valid2 = '5323_file_name.tarz.bmp'
    let valid3 = '465768783_Hello_World.!.Hello_World'
    
    describe('Valid Input', () => {
        it('should return valid input for standard case', () => {
            expect(FileNameExtractor.extractFileName(valid1)).toEqual('chiann_desiree.segars');
        });

        it('should return valid input for standard case', () => {
            expect(FileNameExtractor.extractFileName(valid2)).toEqual('file_name.tarz');
        });

        it('should return valid input for standard case', () => {
            expect(FileNameExtractor.extractFileName(valid3)).toEqual('Hello_World.!');
        });
    });
});