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
		"content": `<style>.a7juzblmp {
  d: path("M5 12a3 3 0 0 1 6 0 3 3 0 0 1 6 0l-6 6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nwr6yccba {
  d: path("M20 7v7");
}

.xec9ltb1w {
  d: path("m20 3 -4 4h4Z");
}
</style><g class="nrj6p8qat"><path class="a7juzblmp"/><path class="nwr6yccba"/><path class="xec9ltb1w"/></g>`,
		"fallback": "iconmind:wellbeing-goal-outline-regular",
	});
}

export default Component;
