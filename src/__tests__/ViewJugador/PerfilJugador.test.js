import React from "react";
import Perfil from "../../components/ViewJugador/Perfil";
import { cleanup, render, screen} from "@testing-library/react";

afterEach(cleanup);

jest.mock('axios', () => ({
    get: jest.fn(() => 
        Promise.resolve({ data: {} }),
    ),
}));

describe("Basic page working", function () {
    
    test('The page loads without any problems', async () => { 
        
        const component = render(<Perfil />)

        const myInfo = screen.getByText('Mi Información');
        const myFavoriteFields = screen.getByText('Mis Canchas Favoritas');
        const myBookings = screen.getByText('Mis Reservas');

        // Realizar aserciones para verificar la presencia de los elementos
        expect(myInfo).toBeInTheDocument();
        expect(myFavoriteFields).toBeInTheDocument();
        expect(myBookings).toBeInTheDocument();

    })
})