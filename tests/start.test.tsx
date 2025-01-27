// import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Hahga', () => {
    test("start doing shit", () => {
        expect(true).toBe(true);
    });
});

describe('Initial test',()=>{
    const Arr = ['Memy','jr','Marwa','md','Body' , 'sr'];

    test('5od',()=>{
        Arr.forEach(element => {
            let isJr = false

            if(element === 'jr'){
            isJr = true
                expect(isJr).toBe(true)
            }else {
                expect(isJr).not.toBe(true)
            }
    })
    
    });
    test('5od 2 ' ,()=>{
        const name = 'Memy'
        expect(name).not.toBeFalsy()
    })
})



