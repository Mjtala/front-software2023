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



describe("Basic page working", function () {
    
    test('The page loads without any problems', async () => { 
        
        const component = render(<PerfilEmpresa />)

        const myInfo = screen.getByText('Mi Información');
        const myFields = screen.getByText('Mis Canchas');
        const uploadField = screen.getByText('Subir Cancha');

        expect(myInfo).toBeInTheDocument();
        expect(myFields).toBeInTheDocument();
        expect(uploadField).toBeInTheDocument();

    })
})