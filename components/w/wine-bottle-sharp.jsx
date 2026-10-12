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
		"content": `<style>.aau6z2y0a {
  d: path("M10.25 2.75h3.5v5.5l1.5 1.5l1.5 1.5v10h-9.5v-10l1.5-1.5l1.5-1.5v-1Z");
}

.ffqzan0by {
  d: path("M9.5 13.25h5v4h-5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aau6z2y0a"/><path class="ffqzan0by"/></g>`,
		"fallback": "iconoven:wine-bottle-sharp",
	});
}

export default Component;
