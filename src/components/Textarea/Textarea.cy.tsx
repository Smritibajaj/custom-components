/// <reference types="cypress" />
import { mount } from 'cypress/react';
import React from 'react';

import { isYScrollable, ScrollType } from '../../../cypress/utils';
import Textarea from './Textarea';

describe('Textarea.cy.tsx', () => {
	it('Textarea component renders text properly', () => {
		mount(<Textarea defaultValue="Leena UI text area component" />);
		cy.contains('Binary UI text area component');
	});
	it('able to type multiline text in text area, pressing enter in the input field should NOT take in a new line character', () => {
		const onChangeSpy = cy.spy().as('onChangeSpy');
		mount(
			<Textarea
				onClick={onChangeSpy}
				defaultValue="Line 1"
				id="textbox-abc"
			/>
		);
		const textbox = cy.get('#textbox-abc');
		textbox.type('{enter}Line 2{enter}Line 3{enter}Line 4');
		textbox.should('have.value', 'Line 1\nLine 2\nLine 3\nLine 4');
		cy.get('@onChangeSpy').should('have.been.called');
	});
	it('check that max of only 4 lines to be shown in the text area, and then it should add the scroll', () => {
		mount(<Textarea defaultValue="Line 1" id="textbox-abc2" />);
		const textbox = cy.get('#textbox-abc2');
		textbox.type('{enter}Line 2{enter}Line 3{enter}Line 4');
		textbox.then(a => {
			const scrollable = isYScrollable(a[0])
				? ScrollType.scrollable
				: ScrollType.nonScrollable;
			expect(scrollable).to.eq(ScrollType.nonScrollable);
		});
		textbox.type('{enter}Line 5');
		textbox.then(a => {
			const scrollable = isYScrollable(a[0])
				? ScrollType.scrollable
				: ScrollType.nonScrollable;
			expect(scrollable).to.eq(ScrollType.scrollable);
		});
	});
});
