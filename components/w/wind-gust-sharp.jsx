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
		"content": `<style>.c2-pf8b-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 13.25h7.75a4 4 0 1 0-4-4m-9.75 4h3m-3-4H9.5M5.75 17.5h12");
}
</style><path class="c2-pf8b-j"/>`,
		"fallback": "iconoven:wind-gust-sharp",
	});
}

export default Component;
