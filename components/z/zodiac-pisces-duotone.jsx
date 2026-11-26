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
		"content": `<style>.j5hzspbpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3C6.8802 4.2851 9.5 7.9125 9.5 12C9.5 16.0875 6.8802 19.7149 3 21M21 3C17.1198 4.2851 14.5 7.9125 14.5 12C14.5 16.0875 17.1198 19.7149 21 21M5 12L19 12");
}
</style><path class="j5hzspbpi"/>`,
		"fallback": "keyline-icons:zodiac-pisces-duotone",
	});
}

export default Component;
