import { render, screen } from "@testing-library/react";
import GifCard from "../../components/GifCard";

describe('Testing <GifCard />', () => {

    const key = 1;
    const gifs = {
        title: 'Image title',
        url: 'http://imagetest.com/',
    }

    test('Must match snapshot', () => {

        const { container } = render( <GifCard key={key} {...gifs} />)
        expect( container ).toMatchSnapshot()

       
        
    });

    test('Must img with the url and alt text', () => {

        render( <GifCard key={key} {...gifs} />)
        
        const { src , alt } = screen.getByRole('img')
        
        expect( src ).toBe( gifs.url )
        expect( alt ).toBe( gifs.title )

       
        
    });

    test('Must show title in our component', () => {

        render( <GifCard key={key} {...gifs} />)
        
        expect( screen.getByText( gifs.title )).toBeTruthy()

       
        
    });
    

});
