import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import axios from 'axios';

afterEach(cleanup);


import SearchField from "../../components/SearchField/SearchField";

jest.mock('axios', () => ({
    get: jest.fn(() => 
        Promise.resolve({ data: { "cancha1": { 'name': 'Cancha Pepito' }, "cancha2": { 'name': 'Cancha Pepito2' } } }),
    ),
}));



describe("Basic page working", function () {

    test('The page loads without any problems', async () => {

        const component = render(<SearchField />)
        expect(component.getByText('Espacios deportivos')).toBeInTheDocument();

    });

    test('The useEffect has been call at render', async () => {

        render(<SearchField />);
        expect(axios.get).toHaveBeenCalled();

    });

    test('Checks the original value of the hooks in the page', async () => {

        render(<SearchField />)
        const pageInput = screen.getByLabelText('Pagina:');
        const fieldsInput = screen.getByLabelText('Canchas por pagina:')

        expect(pageInput.value).toBe('0');
        expect(fieldsInput.value).toBe('5');

    });
})

describe("Basic Funtions working", function () {

    test('Change the values of the hooks', async () => {

        render(<SearchField />);

        const fieldsInput = screen.getByTestId('inputfields');
        const pageInput = screen.getByTestId('inputpage');

        fireEvent.change(fieldsInput, { target: { value: '10' } });
        fireEvent.change(pageInput, { target: { value: '2' } });

        expect(fieldsInput.value).toBe('10');
        expect(pageInput.value).toBe('2');

    });

    test('the funtion that sends information to the back, its activated when the form its submited', async () => {

        const sentToApiMock = jest.fn();
        
        render(<SearchField sentToApi={sentToApiMock} />);
        
        const button = screen.getByText('Mostrar canchas');
        
        fireEvent.click(button);

        expect(sentToApiMock).toHaveBeenCalled;
    });
})