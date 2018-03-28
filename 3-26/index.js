'use strict';

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        const regex = /\_(.*)\./;

        return regex.exec(dirtyFileName)[1];
    }
}