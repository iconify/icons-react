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
		"content": `<style>.kqlqbrobv {
  d: path("M2.5 20.5V9L12 3.5L21.5 9v11.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vmt-lpbqq {
  d: path("M7 16.5h5v4H7Zm5 0h5v4h-5Zm-2.5-4h5v4h-5Z");
}
</style><g class="ulnmmdpxh"><path class="kqlqbrobv"/><path class="vmt-lpbqq"/></g>`,
		"fallback": "uix-sharp:wholesale-market",
	});
}

export default Component;
