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
		"content": `<style>.e33hsdbbh {
  d: path("M17 5C11.232.674 3 4.79 3 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v2gv52b2c {
  stroke-opacity: 0.4;
  d: path("M7 19c5.768 4.326 14 .21 14-7a3 3 0 1 0-6 0a3 3 0 0 0 6 0");
}
</style><g class="nrj6p8qat"><path class="v2gv52b2c"/><path class="e33hsdbbh"/></g>`,
		"fallback": "coolicons:zodiac-cancer-duocolor",
	});
}

export default Component;
