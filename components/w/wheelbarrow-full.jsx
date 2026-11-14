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
		"content": `<style>.d5839qmet {
  d: path("M5.5 9.5H21l-3 6H8Z");
}

.lumegp62v {
  d: path("M12.5 18a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM8 15.5L2.5 11M8 15.5V21M7 9.5c1-3 3.5-3.5 5.5-2.5c2-1.5 6-1 7 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d5839qmet"/><path class="lumegp62v"/></g>`,
		"fallback": "uix-sharp:wheelbarrow-full",
	});
}

export default Component;
