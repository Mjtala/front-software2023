import React from "react";
import axios from 'axios'
import ParticularField from "../../components/ParticularField/ParticularField";
import { cleanup, render, waitFor, act, renderHook} from "@testing-library/react";

afterEach(cleanup);

jest.mock('axios', () => ({
    get: jest.fn(() => 
        ({ data: {'name': 'cancha1', 'information':'Cancha 1', 'location': 'SJ', 'price':5000, 'province':'SJ'} }),
    ),
}));


describe("Funcionamiento basico", function () {

    test('Se activa el useEffect', async () => {

        // Renderizar el componente
        render(<ParticularField />);

        // Verificar si se llamó a axios.get
        expect(axios.get).toHaveBeenCalled();

    });

})
