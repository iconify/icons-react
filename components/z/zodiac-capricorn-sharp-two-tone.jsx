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
		"content": `<style>.k-qoh2bft {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L3 3C4.1046 3 5 3.8954 5 5L5 22M5 7C5 4.7909 6.7909 3 9 3C11.2091 3 13 4.7909 13 7L13 19C13 20.1046 12.1046 21 11 21L10 21M13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17Z");
}
</style><path class="k-qoh2bft"/>`,
		"fallback": "keyline-icons:zodiac-capricorn-sharp-two-tone",
	});
}

export default Component;
