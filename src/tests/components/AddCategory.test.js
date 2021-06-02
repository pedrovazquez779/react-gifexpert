import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory'

describe('Probando el componente AddCategory', () => {

    const setCategories = jest.fn(); // Mock
    let wrapper = shallow(<AddCategory setCategories={setCategories} />) // Esta inicializacion es simplemente para la ayudar de VS Code

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    });

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value: value } });

        expect(wrapper.find('p').text().trim()).toBe(value)

    })

    test('no debe postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } }) // es lo mismo que preventDefault: () => {}

        expect(setCategories).not.toHaveBeenCalled()

    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola mundo';
        // Simular input change
        wrapper.find('input').simulate('change', { target: { value: value } });

        // Simular submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        // Validaciones
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe(''); // value es el prop que se manda en el componente

    })

})
