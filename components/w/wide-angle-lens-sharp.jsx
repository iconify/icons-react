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
		"content": `<style>.edml7ompc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8h6.5v2.25h2.5v3.5h-2.5V16h-8.5V8zm11.57.94l4.93-5.88m-4.93 12l4.93 5.88");
}
</style><path class="edml7ompc"/>`,
		"fallback": "iconoven:wide-angle-lens-sharp",
	});
}

export default Component;
