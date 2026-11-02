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
		"content": `<style>.et8vz1all {
  stroke-opacity: 0.4;
  d: path("M9 11a5 5 0 1 0 4 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pjwwvqhdv {
  d: path("M8 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 4v6h6l3 6h2M9 10h5");
}
</style><g class="nrj6p8qat"><path class="et8vz1all"/><path class="pjwwvqhdv"/></g>`,
		"fallback": "coolicons:wheelchair-duocolor-sharp",
	});
}

export default Component;
