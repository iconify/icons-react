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
		"content": `<style>.hq-h8uxcp {
  d: path("M2.5 3.5h19v13h-19Z");
}

.j9amvacjb {
  d: path("m6.5 12.5l3-5l3 3.5l3-4.5l2 2.5M8 20.5l2.5-4m5.5 4l-2.5-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hq-h8uxcp"/><path class="j9amvacjb"/></g>`,
		"fallback": "uix-sharp:whiteboard-interview",
	});
}

export default Component;
