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
		"content": `<style>.ctey_7kfc {
  d: path("M3 2.5h18v19H3Zm9 0v19M3 12h18");
}

.tps12lbir {
  d: path("M14.75 14.75h2.5v4h-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ctey_7kfc"/><path class="tps12lbir"/></g>`,
		"fallback": "uix-sharp:window-closed",
	});
}

export default Component;
