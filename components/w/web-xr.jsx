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
		"content": `<style>.hp9ld3byv {
  d: path("M2.5 3.5h19v17h-19Zm0 4.5h19");
}

.qxxldhs9n {
  d: path("M8 11h8a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-1.5L13.25 16h-2.5L9.5 17.5H8a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hp9ld3byv"/><path class="qxxldhs9n"/></g>`,
		"fallback": "uix-sharp:web-xr",
	});
}

export default Component;
