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
		"content": `<style>.mdc2l1-1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H9v5H2.5ZM15 3h6.5v5H15ZM2.5 15H9v5H2.5ZM9 5.5h6M5.75 8v7m8.75 3a3.25 3.25 0 0 1 6.5 0m-7.5 0h2v3.5h-2Zm6.5 0h2v3.5h-2Z");
}
</style><path class="mdc2l1-1h"/>`,
		"fallback": "uix-sharp:workflow-support",
	});
}

export default Component;
