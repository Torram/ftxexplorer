import React from "react";
import {shallow} from 'enzyme';
import Collections from './Collections'

describe ('<Collections />', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Collections />)
    });

    test('It should mount', ()=>{
        expect(component.length).toBe(1)
    })
});