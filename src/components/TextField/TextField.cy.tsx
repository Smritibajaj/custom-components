/// <reference types="cypress" />
import { mount } from 'cypress/react';
import React from 'react';

import TextField from './TextField';

describe('validating input field', () => {
	it('pressing enter in the input field should NOT take in a new line character', () => {
		const onChangeSpy = cy.spy().as('onChangeSpy');
		mount(
			<TextField
				onClick={onChangeSpy}
				defaultValue="Line 1"
				id="input-abc"
			/>
		);
		const inputBox = cy.get('#input-abc');
		inputBox.type('{enter}Line 2{enter}Line 3{enter}Line 4');
		inputBox.should('have.value', 'Line 1Line 2Line 3Line 4');
	});
});
