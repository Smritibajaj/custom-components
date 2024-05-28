import { mount } from 'cypress/react';
import React from 'react';

import { Radio, RadioGroup, RadioWithLabel } from '.';

describe('Radio.cy.tsx', () => {
	it('Radio is rendering', () => {
		mount(<Radio test-cy="radio" />);
	});

	it('Radio click is working', () => {
		mount(<Radio test-cy="radio" />);
		cy.get('[test-cy="radio" ]').should('not.have.class', 'Mui-checked');
		cy.get('.PrivateSwitchBase-input').click();
		cy.get('[test-cy="radio" ]').should('have.class', 'Mui-checked');
		cy.get('.PrivateSwitchBase-input').click();
		cy.get('[test-cy="radio" ]').should('have.class', 'Mui-checked');
	});

	it('Radio label is rendering', () => {
		mount(
			<RadioWithLabel test-cy="radio-with-label" label="Radio Label" />
		);
		cy.get('.MuiTypography-root').should('have.text', 'Radio Label');
	});

	it('Radio Group and labels are rendering', () => {
		mount(
			<RadioGroup
				test-cy="radio-group"
				options={[
					{ label: 'Label 1', value: 'Label1' },
					{ label: 'Label 2', value: 'Label2' },
				]}
				label="Radio Group Label"
			/>
		);
		cy.get('.MuiFormLabel-root').should('have.text', 'Radio Group Label');
		cy.get(':nth-child(1) > .MuiTypography-root').should(
			'have.text',
			'Label 1'
		);
		cy.get(':nth-child(2) > .MuiTypography-root').should(
			'have.text',
			'Label 2'
		);
	});

	it("Multiple Radio options can't be checked together", () => {
		mount(
			<RadioGroup
				test-cy="radio-group"
				options={[
					{ label: 'Label 1', value: 'Label1' },
					{ label: 'Label 2', value: 'Label2' },
				]}
				label="Radio Group Label"
			/>
		);
		cy.get(':nth-child(1) > .MuiButtonBase-root').should(
			'not.have.class',
			'Mui-checked'
		);
		cy.get(
			':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input'
		).click();
		cy.get(':nth-child(1) > .MuiButtonBase-root').should(
			'have.class',
			'Mui-checked'
		);
		cy.get(':nth-child(2) > .MuiButtonBase-root').should(
			'not.have.class',
			'Mui-checked'
		);
		cy.get(
			':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input'
		).click();
		cy.get(':nth-child(2) > .MuiButtonBase-root').should(
			'have.class',
			'Mui-checked'
		);
		cy.get(':nth-child(1) > .MuiButtonBase-root').should(
			'not.have.class',
			'Mui-checked'
		);
	});
});
