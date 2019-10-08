const {GenerateText} = require('./util');

test('Should be Hello world',async () =>{
    let text = await GenerateText();
    expect(text).toBe('Hello world1');
});