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
		"content": `<style>.nqw9evbha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h10v10H3Zm5 0v10m-5-5h10m4-5a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8");
}
</style><path class="nqw9evbha"/>`,
		"fallback": "coolicons:window-sensor-sharp",
	});
}

export default Component;
