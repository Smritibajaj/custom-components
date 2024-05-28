/// <reference types="cypress" />
import { mount } from 'cypress/react';
import React from 'react';

import { Button } from '../Button';
import Snackbar from './Snackbar';

describe('Snackbar.cy.tsx', () => {
	it('should render simple snackbar properly', () => {
		mount(<Snackbar message="simple snackbar" open={true} />);
		cy.get('.MuiSnackbarContent-message').contains('simple snackbar');
	});

	it('should render simple snackbar with startIcon properly', () => {
		mount(
			<Snackbar
				message="simple snackbar"
				open={true}
				startIconName="AddressBook"
			/>
		);
		cy.get('.MuiSnackbarContent-message').then(el => {
			expect(el.find('svg')).to.have.length?.greaterThan(0);
		});
	});

	it('should render simple snackbar with actions properly', () => {
		mount(
			<Snackbar
				message="simple snackbar"
				open={true}
				action={[
					<Button
						key={Math.random()}
						variant="ghost"
						size="small"
						disableRipple
						color="P-30"
						sx={{
							'&:hover': {
								backgroundColor: 'transparent',
							},
						}}
					>
						Button
					</Button>,
				]}
			/>
		);
	});

	it('should close snackbar on click of close icon after 1sec', () => {
		mount(<Snackbar message="simple snackbar" open={true} />);
		const action = cy.get('.MuiSnackbarContent-action .MuiBox-root');
		cy.wait(1000);
		action.find('svg').click({ force: true });
	});
});
