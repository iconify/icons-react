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
		"content": `<style>.orrdkzbqo {
  d: path("M21.75 16.75a3 3 0 1 1-3-3M16.5 19L14 21.5");
}

.r8vjxsb1w {
  d: path("M10.6 21H3.5V4.5h17v6.4M8 2.5v4m8-4v4m-12.5 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r8vjxsb1w"/><path class="orrdkzbqo"/></g>`,
		"fallback": "uix-sharp:works-calendar",
	});
}

export default Component;
