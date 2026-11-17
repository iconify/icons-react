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

.va4t8rvrj {
  d: path("M3 19V5H21V19M1 19H23M12 5V19M3 12H21");
}

.xtnc8cejc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 4C21.552 4 22 4.448 22 5V18H23V20H1V18H2V5C2 4.448 2.448 4 3 4H21Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="xtnc8cejc"/><path class="va4t8rvrj"/></g>`,
		"fallback": "keyline-icons:window-horizontal-sharp-two-tone",
	});
}

export default Component;
