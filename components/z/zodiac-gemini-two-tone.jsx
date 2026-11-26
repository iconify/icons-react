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
		"content": `<style>.q10qa7b1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4C5.1686 5.3203 8.5673 6 12 6C15.4327 6 18.8314 5.3203 22 4M2 20C5.1686 18.6797 8.5673 18 12 18C15.4327 18 18.8314 18.6797 22 20M8.5 5.7633L8.5 18.2367M15.5 5.7633L15.5 18.2367");
}
</style><path class="q10qa7b1x"/>`,
		"fallback": "keyline-icons:zodiac-gemini-two-tone",
	});
}

export default Component;
