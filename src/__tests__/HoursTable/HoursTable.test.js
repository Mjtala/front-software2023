import React from "react";
import axios from "axios";
import HoursTable from "../../components/HoursTable/HoursTable";
import { render, cleanup, fireEvent, screen} from "@testing-library/react";


afterEach(cleanup)

jest.mock('axios', () => ({
    post: jest.fn((data) => {
        return true
    }),
}));



describe("Funcionamiento basico", function () {

    test('Se entra a la pagina', async () => {

        // Renderizar el componente
        
        const fields = [
            { id: 1, nombre: 'Cancha 1', maxJugadores: 10, horariosNoDisponibles: [14, 17, 20], horariosJugadores: { 8: 5, 10: 10 } },
            { id: 2, nombre: 'Cancha 2', maxJugadores: 8, horariosNoDisponibles: [10, 15, 19], horariosJugadores: { 8: 3, 10: 7 } },
            { id: 3, nombre: 'Cancha 3', maxJugadores: 12, horariosNoDisponibles: [], horariosJugadores: { 8: 8, 10: 11 } },
            // Agrega más canchas si es necesario
        ];

        const component = render(<HoursTable canchas={ fields } />);
        expect(component.getByText('Cancha')).toBeInTheDocument();

    });

})

describe("Funcionalidades basicas", function () {

    test('Se ingresa a la pagina con una cancha disponbile',  async () => {

        // Renderizar el componente
        
        const fields = [
            { id: 1, nombre: 'Cancha 1', maxJugadores: 10, horariosNoDisponibles: [14, 17, 20], horariosJugadores: { 8: 5, 10: 10 } },
            // Agrega más canchas si es necesario
        ];

        const component = render(<HoursTable canchas={ fields } />);
        expect(component.getByText('Cancha')).toBeInTheDocument();
    })

    test('Se ingresa a la pagina con sin ninguna cancha disponbile',  async () => {

        // Renderizar el componente
        
        const fields = [];
        
        const component = render(<HoursTable canchas={ fields } />);
        expect(component.queryByText('Cancha')).toBeNull();
        expect(component.getByText('No hay canchas ni horarios que mostrar')).toBeInTheDocument();
        
    })
})