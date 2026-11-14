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
		"content": `<style>.aiufcnbvj {
  d: path("M4.5 7.5H16l-1 11H6Zm0-4l11.5 4m-.25 2.5h3.75");
}

.g6pr7vbxi {
  d: path("M6 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aiufcnbvj"/><path class="g6pr7vbxi"/></g>`,
		"fallback": "uix-sharp:wheelie-bin-open",
	});
}

export default Component;
