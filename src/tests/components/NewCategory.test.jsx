import { NewCategory } from '../../components/NewCategory'
import { fireEvent, render, screen } from '@testing-library/react';



describe('<NewCategory /> component testing ', () => {

    
    test('Must change the input tet value', () => {

       render( < NewCategory onAddCategory={ () => {} } /> )
       
       const input = screen.getByRole('textbox');

       fireEvent.input( input, { target: { value: 'The Office'}} )
       expect( input.value ).toBe('The Office')
        
    });

    test('Must call onAddCategory if input has value', () => {

        const inputValue = 'The Office'
        const onAddCategory = jest.fn()

        render( < NewCategory onAddCategory={ onAddCategory } /> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue}} )
        fireEvent.submit( form )
        console.log(input.value);

        expect( input.value ).toBe('')
        expect( onAddCategory ).toHaveBeenCalledTimes(1)
        expect( onAddCategory ).toHaveBeenCalledWith( inputValue )
       
     });

   /*   test('Shouldnt call functions if input is empty', () => {

       
        const onAddCategory = jest.fn()

        render( < NewCategory onAddCategory={ onAddCategory } /> )

        
        const form = screen.getByRole('form')

        fireEvent.submit( form )
        expect( onAddCategory ).not.toHaveBeenCalled
        
       
     }); */
    
    
});
