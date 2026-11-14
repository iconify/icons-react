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
		"content": `<style>.to0yleyzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19V21h-19Zm5.5-2v4m8-4v4m-10.5 7h.01m3.24 0h.01m3.24 0h.01m3.24 0h.01m3.24 0h.01");
}
</style><path class="to0yleyzx"/>`,
		"fallback": "uix-sharp:weekdays-schedule",
	});
}

export default Component;
