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
		"content": `<style>.mw-zntbuu {
  d: path("m4.5 13.5l1.125-1.125L6.75 13.5M10.5 17l1.125-1.125L12.75 17m4.5-3.5l1.125-1.125L19.5 13.5m-11-3.75v11.5m7-11.5v11.5");
}

.pj001gqcf {
  d: path("M2.75 9a2.31 2.31 0 0 1 4.62 0A2.31 2.31 0 0 1 12 9a2.31 2.31 0 0 1 4.62 0a2.31 2.31 0 0 1 4.63 0v12.25H2.75V19.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pj001gqcf"/><path class="mw-zntbuu"/></g>`,
		"fallback": "iconoven:wool-bale-sharp",
	});
}

export default Component;
