import { getGifs } from "../../services/getGifs";
describe('getGifs function testing', () => {

    test('must return an array of objects', async () => {

        const gifs = await getGifs('The Office')

        expect( gifs.length ).toBeGreaterThan(0)
        
        expect ( gifs[0] ).toEqual({
            id: expect.any( String ), 
            title: expect.any( String),
            url: expect.any( String)
        })

    });
    
    
});
