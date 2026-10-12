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
		"content": `<style>.ckqhrcbbe {
  d: path("m6.6 17.4l6.65-6.65m-1.9-1.7l7.55-5.6q.6-.45 1.09.12l.52.61q.49.57-.11 1.02l-7.55 5.6q-.6.45-1.09-.12l-.52-.61q-.49-.57.11-1.02");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yohxqabuf {
  cx: 5px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="yohxqabuf"/><path class="ckqhrcbbe"/></g>`,
		"fallback": "iconoven:wiper-blade",
	});
}

export default Component;
