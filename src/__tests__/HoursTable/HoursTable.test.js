import React from "react";
import HoursTable from "../../components/HoursTable/HoursTable";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup)

jest.mock('axios', () => ({
    post: jest.fn(() => {
        return true
    }),
}));



describe("Basic page working", function () {
    test('Enter to the page, with a valid fields with available hours', async () => {
        const fields = [
            { id: 1, name: 'Cancha 1', maxplayers: 10, unavailablehours: [14, 17, 20], playerperhour: { 8: 5, 10: 10 } },
            { id: 2, name: 'Cancha 2', maxplayers: 8, unavailablehours: [10, 15, 19], playerperhour: { 8: 3, 10: 7 } },
            { id: 3, name: 'Cancha 3', maxplayers: 12, unavailablehours: [], playerperhour: { 8: 8, 10: 11 } },
        ];

        const component = render(<HoursTable fields={fields} />);
        expect(component.getByText('Cancha')).toBeInTheDocument();

    });

})

describe("Basic Funtions working", function () {
    test('Enter to a page with at least one available hour', async () => {
        const fields = [
            { id: 1, name: 'Cancha 1', maxplayers: 10, unavailablehours: [14, 17, 20], playerperhour: { 8: 5, 10: 10 } },
        ];

        const component = render(<HoursTable fields={fields} />);
        expect(component.getByText('Cancha')).toBeInTheDocument();
    })

    test('Enter to a page with no available hours', async () => {
        // Renderizar el componente

        const fields = [];

        const component = render(<HoursTable fields={fields} />);
        expect(component.queryByText('Cancha')).toBeNull();
        expect(component.getByText('No hay canchas ni horarios que mostrar')).toBeInTheDocument();

    })
})