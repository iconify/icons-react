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
		"content": `<style>.lfmtysm7v {
  d: path("M2.5 16.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm10.5 0a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Z");
}

.qul6dub6l {
  d: path("M4.75 9.5h4v2.75h-4Zm10.5 0h4v2.75h-4Zm-4.25 5h2M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lfmtysm7v"/><path class="qul6dub6l"/></g>`,
		"fallback": "uix-sharp:workforce-planning",
	});
}

export default Component;
