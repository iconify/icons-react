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
		"content": `<style>.a7nmjmbpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h.75A2.625 2.625 0 0 1 8.5 5.125v.75A2.625 2.625 0 0 1 5.875 8.5h-.75A2.625 2.625 0 0 1 2.5 5.875v-.75A2.625 2.625 0 0 1 5.125 2.5m13 0h.75A2.625 2.625 0 0 1 21.5 5.125v.75A2.625 2.625 0 0 1 18.875 8.5h-.75A2.625 2.625 0 0 1 15.5 5.875v-.75A2.625 2.625 0 0 1 18.125 2.5m0 13h.75a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625h-.75a2.625 2.625 0 0 1-2.625-2.625v-.75a2.625 2.625 0 0 1 2.625-2.625m-13 0h.75A2.625 2.625 0 0 1 8.5 18.125v.75A2.625 2.625 0 0 1 5.875 21.5h-.75A2.625 2.625 0 0 1 2.5 18.875v-.75A2.625 2.625 0 0 1 5.125 15.5M8.5 5.5h7m-2-2l2 2l-2 2m5 1v7m-2-2l2 2l2-2m-5 5h-7m2-2l-2 2l2 2");
}
</style><path class="a7nmjmbpb"/>`,
		"fallback": "uix:workflow-matrix",
	});
}

export default Component;
