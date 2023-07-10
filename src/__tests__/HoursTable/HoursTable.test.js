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
        const fields = { id: 1, name: 'Cancha 1', maxplayers: 10, playerperhour: { 8: 5, 10: 10 } };

        const component = render(<HoursTable field={fields} />);
        expect(component.getByText('Horarios')).toBeInTheDocument();

    });

})