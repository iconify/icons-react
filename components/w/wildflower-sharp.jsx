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
		"content": `<style>.qa556vb-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.47 4.48h0l.47.73l.84.22l.84.22l-.55.67l-.55.67l.05.87l.05.86l-.81-.31L7 8.1l-.81.31l-.81.31l.05-.86l.05-.87l-.55-.67l-.55-.67l.84-.22l.84-.22l.47-.73l.47-.73zm10-1.25h0l.47.73l.84.22l.84.22l-.55.67l-.55.67l.05.87l.05.86l-.81-.31l-.81-.31l-.81.31l-.81.31l.05-.86l.05-.87l-.55-.67l-.55-.67l.84-.22l.84-.22l.47-.73l.47-.73zM7 9.25c0 4.5 2 8.5 5 12M17 8c0 5.25-2 9.5-5 13.25m0 0v-6.5");
}
</style><path class="qa556vb-s"/>`,
		"fallback": "iconoven:wildflower-sharp",
	});
}

export default Component;
