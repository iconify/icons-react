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
		"content": `<style>.z-3gyz9mr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.75 3L5 14h5.25v7L19 10h-5.25z");
}
</style><path class="z-3gyz9mr"/>`,
		"fallback": "coolicons:zap-duocolor-sharp",
	});
}

export default Component;
