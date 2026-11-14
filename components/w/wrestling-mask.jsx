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
		"content": `<style>.fy9wqjcxf {
  d: path("m6.75 10.25l3.75 1.25l-.75 2.25l-2.25-.5Zm10.5 0L13.5 11.5l.75 2.25l2.25-.5ZM10 17.5h4m-2-15V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v1-ltvx7q {
  d: path("M12 2.5c5.5 1.5 8 5 8 10c0 5.5-3.5 9-8 9s-8-3.5-8-9c0-5 2.5-8.5 8-10Z");
}
</style><g class="ulnmmdpxh"><path class="v1-ltvx7q"/><path class="fy9wqjcxf"/></g>`,
		"fallback": "uix-sharp:wrestling-mask",
	});
}

export default Component;
