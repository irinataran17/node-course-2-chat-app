var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {

        var from = 'Irina';
        var text = 'this is test';
        var message = generateMessage(from, text);

        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);
        expect(message.createdAt).toBeTruthy();

    });
});