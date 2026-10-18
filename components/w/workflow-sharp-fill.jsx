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

.rd6iclxvz {
  d: path("M7 10L7 17L13 17");
}

.wy07gj_lu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 3L11 3C11.5523 3 12 3.4477 12 4L12 10C12 10.5523 11.5523 11 11 11L3 11C2.4477 11 2 10.5523 2 10L2 4C2 3.4477 2.4477 3 3 3ZM13 13L21 13C21.5523 13 22 13.4477 22 14L22 20C22 20.5523 21.5523 21 21 21L13 21C12.4477 21 12 20.5523 12 20L12 14C12 13.4477 12.4477 13 13 13Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="wy07gj_lu"/><path class="rd6iclxvz"/></g>`,
		"fallback": "keyline-icons:workflow-sharp-fill",
	});
}

export default Component;
