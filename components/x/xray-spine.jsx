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
		"content": `<style>.luf42usuo {
  d: path("M8.75 6L10 5.25h4l1.25.75m-6.5 3.25L10 8.5h4l1.25.75m-6.5 3.25l1.25-.75h4l1.25.75m-6.5 3.25L10 15h4l1.25.75M8.75 19l1.25-.75h4l1.25.75");
}

.tgx030-6f {
  d: path("M3 2.5h18v19H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tgx030-6f"/><path class="luf42usuo"/></g>`,
		"fallback": "uix-sharp:xray-spine",
	});
}

export default Component;
