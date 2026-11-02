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
		"content": `<style>.lk6jozwdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5v16m0-16a5 5 0 1 0-4 8m4-8a5 5 0 1 1 4 8");
}
</style><path class="lk6jozwdy"/>`,
		"fallback": "coolicons:zodiac-aries-round",
	});
}

export default Component;
