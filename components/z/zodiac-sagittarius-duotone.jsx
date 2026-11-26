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
		"content": `<style>.wu6pe4d1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3L20.5 3C20.7761 3 21 3.2239 21 3.5L21 9M3 21L20.4 3.6M5 13L11 19");
}
</style><path class="wu6pe4d1x"/>`,
		"fallback": "keyline-icons:zodiac-sagittarius-duotone",
	});
}

export default Component;
