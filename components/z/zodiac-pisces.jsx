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
		"content": `<style>.f4xlfdb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.75c3 2 4.5 5 4.5 8.25S8 18.25 5 20.25m14-16.5c-3 2-4.5 5-4.5 8.25s1.5 6.25 4.5 8.25M6.5 12h11");
}
</style><path class="f4xlfdb9a"/>`,
		"fallback": "iconoven:zodiac-pisces",
	});
}

export default Component;
