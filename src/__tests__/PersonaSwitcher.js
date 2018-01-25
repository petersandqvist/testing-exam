import React from 'react';
import { mount, shallow, render } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';

it('should switch image to Zac', () => {
  const personaSwitch = jest.fn();
  const currentPersona = 'Zac'
  const wrapper = mount(<PersonaSwitcher currentPersona={currentPersona} changePersona={personaSwitch} />) ;
  expect(wrapper.find('select').prop('value')).toEqual(currentPersona);
})
