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
		"content": `<style>.p2k5xcc5n {
  d: path("m12.77 6.91l2.35 2.34l.42.42l-.43.42l-.21.22l-.43.42l.43.42l1.27 1.28l.43.42l-.42.42l-1.64 1.64l-.42.42l-.42-.42l-3.4-3.4l-.42-.42l.42-.43l1.28-1.27l.42-.43l-.42-.42l-.22-.22l-.42-.42l.42-.42l.57-.57l.42-.42zm.82 4.71l-.71.7");
}

.x-yi62b5p {
  d: path("M10.76 11.97L4.4 18.33l1.77 1.77l6.36-6.36m3.01-4.07l1.94-1.94l-3.18-3.18l1.59-1.6l4.95 4.95l-4.6 4.6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x-yi62b5p"/><path class="p2k5xcc5n"/></g>`,
		"fallback": "iconoven:wrench-pipe-sharp",
	});
}

export default Component;
