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
		"content": `<style>.s72empbkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16h10l-1 5.5H8Zm5 0V2.5M12 14c-2 0-5-.5-6-3c2.5-.5 5 .5 6 3Zm0-4.25c2 0 5-.5 6-3c-2.5-.5-5 .5-6 3Zm0-4.25c-2 0-4.5-.5-5.5-3C9 2 11 3 12 5.5Z");
}
</style><path class="s72empbkk"/>`,
		"fallback": "uix-sharp:zz-plant",
	});
}

export default Component;
