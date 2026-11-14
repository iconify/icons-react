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
		"content": `<style>.n1f0l6bip {
  d: path("M8.25 13.25C7 12.5 6.5 11.25 6.5 10C6.5 7 9 5 12 5s5.5 2 5.5 5c0 1.25-.5 2.5-1.75 3.25v3.25c0 .75-.5 1.25-1.25 1.25h-5c-.75 0-1.25-.5-1.25-1.25Z");
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

.xf1xay4hi {
  fill: currentColor;
  d: path("M8.75 10.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="tgx030-6f"/><path class="n1f0l6bip"/><path class="xf1xay4hi"/></g>`,
		"fallback": "uix-sharp:xray-skull",
	});
}

export default Component;
