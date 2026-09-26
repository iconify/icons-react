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
		"content": `<style>.lknj651ur {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 3.0001L3.0001 14L11 14L10 20.9999L20.9999 10L13 10L14 3.0001Z");
}
</style><path class="lknj651ur"/>`,
		"fallback": "keyline-icons:zap-sharp",
	});
}

export default Component;
