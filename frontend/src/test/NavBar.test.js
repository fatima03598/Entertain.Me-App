import React from 'react';
import ReactDOM from 'react-dom'
import {shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { findByTestAttr } from '../test/testUtils';
import NavBar from '../Containers/NavBar';

/**
 * Factory function to create a ShallowWrapper for the Congrats componenent
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */


describe('NavBar', () => {

    const setup = (props={userId:null}) => {
        return shallow(<NavBar />)
    }    
    
    it('Should render navbar div without error', () => {
        const wrapper = setup()
        const component = findByTestAttr(wrapper, 'navbar_component');
        expect(component.length).toBe(1);
    })
    
    it('Should render login div if logged out and userid is null', () => {
        const wrapper = setup()
        const logout_div = findByTestAttr(wrapper, 'login_div');
        expect(logout_div.length).toBe(1);
    })

})