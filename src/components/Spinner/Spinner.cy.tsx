/// <reference types="cypress" />
import { mount } from 'cypress/react';
import React from 'react';

import { ThemeWrapper } from '../../../cypress/utils/ThemeWrapper';
import Spinner from './Spinner';

describe('Spinner.cy.tsx', () => {
	it('should mount and render circular Loader properly.', () => {
		mount(
			<ThemeWrapper>
				<Spinner data-cy="spiner-loader" />
			</ThemeWrapper>
		);
	});

	it('should always have fixed primary blue color.', () => {
		mount(
			<ThemeWrapper>
				<Spinner data-cy="spiner-loader" />
			</ThemeWrapper>
		);
		cy.get('[data-cy="spiner-loader"]').should(
			'have.class',
			'MuiCircularProgress-root'
		);
		cy.get('[data-cy="spiner-loader"]')
			.should('have.css', 'color')
			.and($p => {
				expect($p).to.be.equal('rgb(15, 114, 238)');
			});
	});

	it('should apply size prop properly.', () => {
		mount(
			<ThemeWrapper>
				<Spinner data-cy="spiner-loader" size={30} />
			</ThemeWrapper>
		);
		cy.get('[data-cy="spiner-loader"]').should(
			'have.class',
			'MuiCircularProgress-root'
		);
		cy.get('[data-cy="spiner-loader"]')
			.should('have.css', 'width')
			.and($p => {
				expect($p).to.be.equal('30px');
			});
		cy.get('[data-cy="spiner-loader"]')
			.should('have.css', 'height')
			.and($p => {
				expect($p).to.be.equal('30px');
			});
	});
});
