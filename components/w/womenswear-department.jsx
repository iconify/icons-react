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
		"content": `<style>.c8j6ltvsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 3l.5 6l-4 12h13l-4-12l.5-6M9.5 9h5");
}
</style><path class="c8j6ltvsd"/>`,
		"fallback": "uix-sharp:womenswear-department",
	});
}

export default Component;
