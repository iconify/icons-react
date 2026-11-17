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
		"content": `<style>.eu5ifdchi {
  stroke-opacity: 0.4;
  d: path("M17 11a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8");
}

.hpwyywbvz {
  d: path("M3 11h10v10H3Zm5 0v10m-5-5h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="eu5ifdchi"/><path class="hpwyywbvz"/></g>`,
		"fallback": "coolicons:window-sensor-duocolor-sharp",
	});
}

export default Component;
