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
		"content": `<style>.ajdtnkbyp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0");
}

.ft5dv1b6b {
  fill: none;
}

.kleozhtlj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 4v4a2 2 0 0 0 2 2h3c.613 0 1.387.774 2 2l1 2c.613 1.226 1.387 2 2 2h1M9 10h5m-5 1a5 5 0 1 0 4 8");
}
</style><g class="ft5dv1b6b"><path class="ajdtnkbyp"/><path class="kleozhtlj"/></g>`,
		"fallback": "coolicons:wheelchair-duotone-round",
	});
}

export default Component;
