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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s59f6acdq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 2C20.552 2 21 2.448 21 3V20H23V22H1V20H3V3C3 2.448 3.448 2 4 2H20Z");
  stroke: none;
}

.v57shd_9h {
  d: path("M4 21V3H20V21M1 21H23M12 3V21M4 12H20");
}
</style><g class="gp_8x1bzb"><path class="s59f6acdq"/><path class="v57shd_9h"/></g>`,
		"fallback": "keyline-icons:window-sharp-two-tone",
	});
}

export default Component;
