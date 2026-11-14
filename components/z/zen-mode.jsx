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
		"content": `<style>.jw-fsabhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-5 10l3.75-3.5C9 10.5 10.25 10 12 10s3 .5 3.75 1.25l3.75 3.5m-17 4.75q0-2 2.5-2l7 2l7-2q2.5 0 2.5 2q0 1.5-2 1.5h-15q-2 0-2-1.5Z");
}
</style><path class="jw-fsabhr"/>`,
		"fallback": "uix-sharp:zen-mode",
	});
}

export default Component;
