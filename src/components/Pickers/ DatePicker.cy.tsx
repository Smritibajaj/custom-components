import { mount } from 'cypress/react';
import React from 'react';

import DatePicker from './DatePicker';

describe('DatePicker.cy.tsx', () => {
	it('The DatePicker Field is rendering correctly', () => {
		mount(
			<DatePicker selected={new Date('01/01/1800')} onChange={() => {}} />
		);
		cy.get('.react-datepicker__input-container').should('exist');
	});

	it('The DatePicker Field should be clickable', () => {
		mount(
			<DatePicker selected={new Date('01/01/1800')} onChange={() => {}} />
		);
		cy.get('.react-datepicker__input-container').click();
		cy.get('.react-datepicker-popper').should('exist');
		cy.get('.react-datepicker-popper').contains('January');
		cy.get('.react-datepicker-popper').contains('1800');
	});

	it('The DatePicker Field with default value', () => {
		mount(
			<DatePicker selected={new Date('01/01/1800')} onChange={() => {}} />
		);

		cy.get('#mui-3').should('have.value', '01/01/1800');
	});
});
