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
		"content": `<style>.z7xh-mb0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21L21 3M6 12l6 6m2-15h7v7");
}
</style><path class="z7xh-mb0k"/>`,
		"fallback": "coolicons:zodiac-sagittarius-duotone-sharp",
	});
}

export default Component;
