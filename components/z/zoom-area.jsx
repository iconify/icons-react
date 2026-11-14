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
		"content": `<style>.gawwy3b-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7V5.5a2 2 0 0 1 2-2H7m3.5 0h3m3.5 0h1.5a2 2 0 0 1 2 2V7m-17 3.5v3m3.5 7H5.5a2 2 0 0 1-2-2V17m7.5-2.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm6 2.5l3.5 3.5");
}
</style><path class="gawwy3b-z"/>`,
		"fallback": "uix-sharp:zoom-area",
	});
}

export default Component;
