import GifGrid from "../../components/GifGrid";
import { render, screen } from "@testing-library/react";

describe('<GifGrid /> testing ', () => {

    const category = 'The Office'

    test('Must show loading on component mount', () => {

        render( <GifGrid category={ category }/>)
        screen.debug()
        expect( screen.getByText( category.toUpperCase() ))
        expect( screen.getByText( 'loading' ))
        
        
    });
    
});
