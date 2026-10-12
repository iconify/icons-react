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
		"content": `<style>.rdl9wnmvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4c5 1.75 10.5 1.75 15.5 0M4.25 20c5-1.75 10.5-1.75 15.5 0M8.5 5.25v13.5m7-13.5v13.5");
}
</style><path class="rdl9wnmvm"/>`,
		"fallback": "iconoven:zodiac-gemini-sharp",
	});
}

export default Component;
