import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rh2_z77uo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m13.5 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 10.75h11.5l5.5 3.5m-16-3.5L5 4h3m4.5 6.75l3-5.75H18");
}
</style><path class="rh2_z77uo"/>`,
		"fallback": "uix:zero-turn-mower",
	});
}

export default Component;
