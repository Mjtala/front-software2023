import React from "react";
import Perfil from "../../components/ViewJugador/Perfil";
import { cleanup, render, screen} from "@testing-library/react";

afterEach(cleanup);

jest.mock('axios', () => ({
    get: jest.fn(() => 
        Promise.resolve({ data: {} }),
    ),
}));



describe('funcionalidades basicas', function () {
    
    test('Vemos si la pagina carga correctamente', async () => { 
        
        const component = render(<Perfil />)

        const myInfo = screen.getByText('Mi Información');
        const myFields = screen.getByText('Mis Canchas Favoritas');
        const uploadField = screen.getByText('Mis Reservas');

        // Realizar aserciones para verificar la presencia de los elementos
        expect(myInfo).toBeInTheDocument();
        expect(myFields).toBeInTheDocument();
        expect(uploadField).toBeInTheDocument();

    })
})