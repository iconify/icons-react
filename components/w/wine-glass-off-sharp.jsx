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
		"content": `<style>.vbovlabdq {
  d: path("M9 8.25h6a3 3 0 0 1-6 0Zm3 5.25v7.75m-3.5 0h7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1zfo4b9p {
  d: path("M6.75 2.75h10.5l1 2.308V7.25a6.25 6.25 0 0 1-12.5 0V5.058z");
}
</style><g class="x2cwu0gfd"><path class="y1zfo4b9p"/><path class="vbovlabdq"/></g>`,
		"fallback": "iconoven:wine-glass-off-sharp",
	});
}

export default Component;
