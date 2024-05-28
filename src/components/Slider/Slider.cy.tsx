import { mount } from 'cypress/react';
import React from 'react';

import Slider from './Slider';

describe('Slider.cy.tsx', () => {
	it('Slider is rendering', () => {
		mount(<Slider test-cy="slider" />);
	});

	it('Slider marks are rendering', () => {
		mount(
			<Slider
				test-cy="slider"
				marks={[
					{ label: '0%', value: 0 },
					{ label: '100%', value: 100 },
				]}
			/>
		);
		cy.get('.MuiSlider-markLabelActive').should('have.text', '0%');
		cy.get('.css-yafthl-MuiSlider-markLabel').should('have.text', '100%');
	});

	it('Slider tooltips are rendering', () => {
		mount(<Slider test-cy="slider" valueLabelDisplay="auto" />);
		cy.get('.MuiSlider-valueLabel').should(
			'not.have.class',
			'MuiSlider-valueLabelOpen'
		);
		cy.get('.MuiSlider-thumb').trigger('mouseover');
		cy.get('.MuiSlider-valueLabel').should(
			'have.class',
			'MuiSlider-valueLabelOpen'
		);
	});
});
