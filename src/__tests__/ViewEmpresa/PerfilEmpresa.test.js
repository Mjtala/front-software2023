import { cleanup, render, screen} from "@testing-library/react";
import React from "react";
import PerfilEmpresa from "../../components/ViewEmpresa/PerfilEmpresa";
import axios from "axios";


afterEach(cleanup)

jest.mock('axios', () => ({
    get: jest.fn(() => 
        Promise.resolve({ data: {} }),
    ),
}));



describe('funcionalidades basicas', function () {
    
    test('Vemos si la pagina carga correctamente', async () => { 
        
        const component = render(<PerfilEmpresa />)

        const myInfo = screen.getByText('Mi Información');
        const myFields = screen.getByText('Mis Canchas');
        const uploadField = screen.getByText('Subir Cancha');

        // Realizar aserciones para verificar la presencia de los elementos
        expect(myInfo).toBeInTheDocument();
        expect(myFields).toBeInTheDocument();
        expect(uploadField).toBeInTheDocument();

    })
})