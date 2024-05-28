import { mount } from 'cypress/react';
import React from 'react';

import CopyableField from './CopyableField';

describe('CopyableField.cy.tsx', () => {
	it('The Copyable Field is rendering correctly', () => {
		mount(<CopyableField defaultValue="Value" />);
		cy.get('#mui-1').should('have.value', 'Value');
		cy.get('.MuiButton-root').should('exist');
	});

	it('The Value gets copied when the button is clicked', () => {
		mount(<CopyableField defaultValue="Value" />);
		cy.get('.MuiButton-root').click();
		cy.window()
			.its('navigator.clipboard')
			.invoke('readText')
			.should('equal', 'Value');
	});
});
