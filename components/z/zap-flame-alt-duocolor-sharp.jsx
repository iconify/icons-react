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
		"content": `<style>.mjfw0cb2x {
  stroke-opacity: 0.4;
  d: path("M16 21c-3-2.333-1.667-4.333 1-6.667c2.667 2.334 4 4.334 1 6.667");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yw9g3fbyn {
  d: path("M5.667 3h4.666L7.667 7.667H11L3.667 15L5 9H3zM16 21c-5.667-4.667-1.667-8.667 1-12c2.667 3.333 6.667 7.333 1 12Z");
}
</style><g class="nrj6p8qat"><path class="mjfw0cb2x"/><path class="yw9g3fbyn"/></g>`,
		"fallback": "coolicons:zap-flame-alt-duocolor-sharp",
	});
}

export default Component;
