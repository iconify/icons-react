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
		"content": `<style>.o3u26wb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18v17H3Zm5-2v4m8-4v4m-13 3h18M9 19l6-6.5m-5.75.75h.01m5.49 5.25h.01");
}
</style><path class="o3u26wb1o"/>`,
		"fallback": "uix-sharp:weekend-sale",
	});
}

export default Component;
