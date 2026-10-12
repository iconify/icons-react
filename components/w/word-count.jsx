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
		"content": `<style>.v04q3314n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4.75h16.5m-16.5 4.5h16.5M6 13.5v6m3-6v6m3-6v6m3-6v6M4.5 19l11-6");
}
</style><path class="v04q3314n"/>`,
		"fallback": "iconoven:word-count",
	});
}

export default Component;
