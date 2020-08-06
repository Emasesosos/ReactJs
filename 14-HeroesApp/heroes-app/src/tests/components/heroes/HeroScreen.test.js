import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import HeroScreen from '../../../components/heroes/HeroScreen';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={ historyMock }/>
        </MemoryRouter>
    );

    test('Debe de mostrar el componente <Redirect /> si no hay argumentos en el URL', () => {
        
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);

    });
    
});
