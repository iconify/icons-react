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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oh0bhe76u {
  d: path("m3 10l3-3l3 3l3-3l3 3l3-3l3 3");
}

.zcoly0b5m {
  stroke-opacity: 0.4;
  d: path("m3 17l3-3l3 3l3-3l3 3l3-3l3 3");
}
</style><g class="nrj6p8qat"><path class="zcoly0b5m"/><path class="oh0bhe76u"/></g>`,
		"fallback": "coolicons:zodiac-aquarius-duocolor-sharp",
	});
}

export default Component;
