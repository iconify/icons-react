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
		"content": `<style>.bc0r7copj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20L20 4M7.25 10.25l6.5 6.5M12.5 4H20v7.5");
}
</style><path class="bc0r7copj"/>`,
		"fallback": "iconoven:zodiac-sagittarius",
	});
}

export default Component;
