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
		"content": `<style>.sxjrhksli {
  d: path("M17.39 3.97a5.08 5.08 0 0 0-6.57 6.94l-6.8 6.8a1.6 1.6 0 0 0 2.27 2.27l6.8-6.8a5.08 5.08 0 0 0 6.94-6.57l-3.34 3.35l-2.65-2.65Zm-13.14.28l11 11");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjxtcre3m {
  d: path("m17.2 14.72l3.33 3.33l.71.71l-.71.71l-1.06 1.06l-.71.71l-.71-.71l-3.33-3.33l-.71-.71l.71-.71l1.06-1.06l.71-.71z");
}
</style><g class="x2cwu0gfd"><path class="sxjrhksli"/><path class="zjxtcre3m"/></g>`,
		"fallback": "iconoven:wrench-screwdriver-sharp",
	});
}

export default Component;
