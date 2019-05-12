const expect=require('expect');
let {generateMessage}=require('./message');

describe("generateMessage()",()=>{
    it("should generate a message",()=>{

        let message=generateMessage("adminone","hello from admin");
        expect(message.from).toBe("adminone");
    })
})