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
		"content": `<style>.av9wcccqa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 8a2 2 0 0 1 2-2h7l3 6H5Z");
}

.ft5dv1b6b {
  fill: none;
}

.ond4guogw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 17l-1-5h18l-1 5M5 12V8a2 2 0 0 1 2-2h7l3 6M7 6V3M2 20c.5.5 1 1 2 1c2 0 2-2 4-2s2 2 4 2s2-2 4-2s2 2 4 2c1 0 1.5-.5 2-1M12 9h.01");
}
</style><g class="ft5dv1b6b"><path class="av9wcccqa"/><path class="ond4guogw"/></g>`,
		"fallback": "coolicons:yacht-duotone-round",
	});
}

export default Component;
