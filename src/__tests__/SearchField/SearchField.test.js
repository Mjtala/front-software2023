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



describe("Funcionamiento basico", function () {

    test('La pagina carga correctamente', async () => {

        const component = render(<SearchField />)
        expect(component.getByText('Espacios deportivos')).toBeInTheDocument();

    });

    test('Se activa el useEffect', async () => {

        // Renderizar el componente
        render(<SearchField />);

        // Verificar si se llamó a axios.get
        expect(axios.get).toHaveBeenCalled();

    });

    test('Revisamos el valor inicial de page y fileds', async () => {

        render(<SearchField />)
        const pageInput = screen.getByLabelText('Pagina:');
        const fieldsInput = screen.getByLabelText('Canchas por pagina:')

        expect(pageInput.value).toBe('0');
        expect(fieldsInput.value).toBe('5');

    });
})

describe("Funcionalidades basicas", function () {

    test('Cambiamos los valores de page y count', async () => {

        render(<SearchField />);

        // Obtener elementos del formulario
        const fieldsInput = screen.getByTestId('inputfields');
        const pageInput = screen.getByTestId('inputpage');

        // Simular cambios en los campos de entrada
        fireEvent.change(fieldsInput, { target: { value: '10' } });
        fireEvent.change(pageInput, { target: { value: '2' } });

        // Verificar si el estado formData se actualiza correctamente
        expect(fieldsInput.value).toBe('10');
        expect(pageInput.value).toBe('2');

    });

    test('Al apretar el boton mostrar canchas, se activa la funcion sendtoApi', async () => {

        const sentToApiMock = jest.fn();
        render(<SearchField sentToApi={sentToApiMock} />);

        // Obtener el elemento del botón
        const button = screen.getByText('Mostrar canchas');

        // Simular un clic en el botón
        fireEvent.click(button);

        // Verificar si la función sentToApi se ha llamado correctamente
        expect(sentToApiMock).toHaveBeenCalled;
    });
})