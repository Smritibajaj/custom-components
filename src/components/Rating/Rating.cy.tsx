/// <reference types="cypress" />
import { mount } from 'cypress/react';
import React from 'react';

import Rating from './Rating';

describe('Rating.cy.tsx', () => {
	it('Rating component renders properly', () => {
		mount(<Rating defaultValue={4} />);
	});

	it('onChange handler of Rating is callable', () => {
		const onChangeSpy = cy.spy().as('onChangeSpy');
		mount(<Rating onChange={onChangeSpy} />);
		cy.get('[for="mui-10"]').click();
		cy.get('@onChangeSpy').should('have.been.called');
	});

	it('Rating values are changing', () => {
		mount(<Rating />);
		cy.get('[for="mui-13"]')
			.children('.MuiRating-icon')
			.should('have.class', 'MuiRating-iconEmpty');
		cy.get('[for="mui-13"]').click();
		cy.get('[for="mui-13"]')
			.children('.MuiRating-icon')
			.should('have.class', 'MuiRating-iconFilled');
	});
});
