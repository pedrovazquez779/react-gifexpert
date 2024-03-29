import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem'

describe('Probando el GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url}/>); // Esto solo se hace para que Visual Studio autocomplete
    // beforeEach(() => {
    //     wrapper = shallow(<GifGridItem title={title} url={url}/>);
    // })

    test('debe mostrar <GifGridItem /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })
    
    test('debe tener animate__fadeIn', () => {

        const div = wrapper.find('div');        
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
        
    })
    

})
