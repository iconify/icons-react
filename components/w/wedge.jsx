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
		"content": `<style>.z45a16whz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 9.922V16.5a1.5 1.5 0 0 0 1.5 1.5h5.892a1.5 1.5 0 0 0 1.118-2.501l-5.893-6.577a1.5 1.5 0 0 0-2.617 1M3 12h3.5m-2-2l2 2l-2 2");
}
</style><path class="z45a16whz"/>`,
		"fallback": "uix:wedge",
	});
}

export default Component;
