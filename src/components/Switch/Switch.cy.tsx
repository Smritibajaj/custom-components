import { mount } from 'cypress/react';
import React from 'react';

import { Switch, SwitchGroup, SwitchWithLabel } from './index';

describe('Switch.cy.tsx', () => {
	it('Switch is rendering', () => {
		mount(<Switch test-cy="switch" />);
	});

	it('Switch click is working', () => {
		mount(<Switch test-cy="switch" />);
		cy.get('[test-cy="switch" ]').should('not.have.class', 'Mui-checked');
		cy.get('.PrivateSwitchBase-input').click();
		cy.get('[test-cy="switch" ]').should('have.class', 'Mui-checked');
		cy.get('.PrivateSwitchBase-input').click();
		cy.get('[test-cy="switch" ]').should('not.have.class', 'Mui-checked');
	});

	it('Switch label is rendering', () => {
		mount(
			<SwitchWithLabel test-cy="switch-with-label" label="Switch Label" />
		);
		cy.get('.MuiTypography-root').should('have.text', 'Switch Label');
	});

	it('Switch Group and labels are rendering', () => {
		mount(
			<SwitchGroup
				test-cy="switch-group"
				options={[
					{ label: 'Label 1', value: 'Label1' },
					{ label: 'Label 2', value: 'Label2' },
				]}
				label="Switch Group Label"
			/>
		);
		cy.get('.MuiFormLabel-root').should('have.text', 'Switch Group Label');
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
