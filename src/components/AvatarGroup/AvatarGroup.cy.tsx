import { mount } from 'cypress/react';
import React from 'react';

import AvatarGroup from './AvatarGroup';

describe('AvatarGroup.cy.tsx', () => {
	it('The Avatar Group component is rendering correctly', () => {
		mount(
			<AvatarGroup
				users={[
					{ displayName: 'New Name' },
					{ displayName: 'New Name' },
					{ displayName: 'New Name' },
				]}
			/>
		);
		cy.get('.MuiAvatarGroup-root').children().should('have.length', 3);
	});

	it('The Avatar Group images are rendering', () => {
		mount(
			<AvatarGroup
				users={[
					{
						displayName: 'New Name',
						img: 'https://picsum.photos/id/237/200/300',
					},
					{
						displayName: 'New Name',
						img: 'https://picsum.photos/id/237/200/300',
					},
				]}
			/>
		);
		cy.get(':nth-child(2) > .MuiAvatar-img').should('exist');
		cy.get(':nth-child(1) > .MuiAvatar-img').should('exist');
	});

	it('The Avatar Group initials are rendering', () => {
		mount(
			<AvatarGroup
				users={[
					{ displayName: 'New Name' },
					{ displayName: 'New Name' },
					{ displayName: 'New Name' },
				]}
			/>
		);
		cy.get(':nth-child(3) > .MuiTypography-root').should('have.text', 'NN');
		cy.get(':nth-child(2) > .MuiTypography-root').should('have.text', 'NN');
		cy.get(':nth-child(1) > .MuiTypography-root').should('have.text', 'NN');
	});
});
