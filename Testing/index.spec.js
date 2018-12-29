const { greet, countSheeps } = require('./index.js');

describe('greet tests', () => {
    test('must pass string' , () => {
        const name = 'conner'
        expect(greet(name)).toBe("Hello, conner how are you doing today?")
    })
})

describe('count sheeps function' , () => {
    test('expect boolean only', () => {
        expect(countSheeps('string')).toEqual(0)
        expect(countSheeps([true])).toBe(1)
        expect(countSheeps([false])).toBe(0)
        expect(countSheeps({})).toEqual(0)
    })
    test('expect 17', () => {

        let exp = [true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true]

        expect(countSheeps(exp)).toEqual(17)    

    })
})