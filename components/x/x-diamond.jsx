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
		"content": `<style>.g6b-1nb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.856 4.356l5.788 5.788a2.625 2.625 0 0 1 0 3.712l-5.788 5.788a2.625 2.625 0 0 1-3.712 0l-5.788-5.788a2.625 2.625 0 0 1 0-3.712l5.788-5.788a2.625 2.625 0 0 1 3.712 0M9.5 9.5l5 5m0-5l-5 5");
}
</style><path class="g6b-1nb3l"/>`,
		"fallback": "uix:x-diamond",
	});
}

export default Component;
