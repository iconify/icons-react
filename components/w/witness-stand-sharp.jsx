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
		"content": `<style>.g828vzbqg {
  cx: 12px;
  cy: 5px;
  r: 2.25px;
}

.rvn_j9b1b {
  d: path("M8 12a4 2.5 0 0 1 8 0Zm-4.25 0h16.5v9.25H3.75zm3.5 3.5h9.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="g828vzbqg"/><path class="rvn_j9b1b"/></g>`,
		"fallback": "iconoven:witness-stand-sharp",
	});
}

export default Component;
