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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.pchoa1uxi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 6.667c.667-1.334 3-1.334 3 .666S18 11 18 11s-3-1.667-3-3.667s2.333-2 3-.666M3 6h8v5H3Z");
}

.v9_cjam5v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h18m-9 0v6m-4 0h8M3 6h8v5H3Zm2 0V3h4v3m9 .667c-.667-1.334-3-1.334-3 .666S18 11 18 11s3-1.667 3-3.667s-2.333-2-3-.666");
}
</style><g class="ft5dv1b6b"><path class="pchoa1uxi"/><path class="v9_cjam5v"/></g>`,
		"fallback": "coolicons:work-life-balance-duotone-sharp",
	});
}

export default Component;
