import { mount } from 'cypress/react';
import React from 'react';

import { Checkbox, CheckboxGroup, CheckboxWithLabel } from './index';

describe('Checkbox.cy.tsx', () => {
	it('Checkbox is rendering', () => {
		mount(<Checkbox />);
	});

	it('Checkbox click is working', () => {
		mount(<Checkbox test-cy="checkbox" />);
		cy.get('[test-cy="checkbox"]').should('not.have.class', 'Mui-checked');
		cy.get('[test-cy="checkbox"]').click();
		cy.get('[test-cy="checkbox"]').should('have.class', 'Mui-checked');
	});

	it('Checkbox label is rendering', () => {
		mount(
			<CheckboxWithLabel
				test-cy="checkbox-with-label"
				label="Checkbox Label"
			/>
		);
		cy.get('.MuiTypography-root').should('have.text', 'Checkbox Label');
	});

	it('Checkbox Group and labels are rendering', () => {
		mount(
			<CheckboxGroup
				test-cy="checkbox-group"
				options={[
					{ label: 'Label 1', value: 'Label1' },
					{ label: 'Label 2', value: 'Label2' },
				]}
				label="Checkbox Group Label"
			/>
		);
		cy.get('.MuiFormLabel-root').should(
			'have.text',
			'Checkbox Group Label'
		);
		cy.get(':nth-child(1) > .MuiTypography-root').should(
			'have.text',
			'Label 1'
		);
		cy.get(':nth-child(2) > .MuiTypography-root').should(
			'have.text',
			'Label 2'
		);
	});
});
