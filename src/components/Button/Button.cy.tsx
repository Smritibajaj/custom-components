/// <reference types="cypress" />
import { mount } from 'cypress/react';
import React from 'react';

import Button from './Button';

describe('Button.cy.tsx', () => {
	it('button component renders text properly', () => {
		mount(<Button>Leena UI component button</Button>);
		cy.contains('Leena UI component button');
	});
	it('onClick handler of button is callable', () => {
		const onButtonClickSpy = cy.spy().as('onButtonClickSpy');
		mount(
			<Button onClick={onButtonClickSpy}>
				Leena UI component button
			</Button>
		);
		cy.contains('Leena UI component button').click();
		cy.get('@onButtonClickSpy').should('have.been.calledOnce');
	});
});
