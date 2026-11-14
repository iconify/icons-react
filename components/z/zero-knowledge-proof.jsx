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
		"content": `<style>.ck2iu5zla {
  d: path("M8.5 15.75L11 18l4.5-4.5");
}

.g9m23rm5u {
  d: path("M4 10h16v11.5H4Zm3.5 0V7a4.5 4.5 0 0 1 9 0v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g9m23rm5u"/><path class="ck2iu5zla"/></g>`,
		"fallback": "uix-sharp:zero-knowledge-proof",
	});
}

export default Component;
