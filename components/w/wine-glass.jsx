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
		"content": `<style>.omzy3-koj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10v4.5a5 5 0 0 1-10 0Zm5 9.5V21m-4 0h8");
}
</style><path class="omzy3-koj"/>`,
		"fallback": "uix-sharp:wine-glass",
	});
}

export default Component;
