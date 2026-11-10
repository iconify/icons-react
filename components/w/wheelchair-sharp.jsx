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
		"content": `<style>.d2he7-vfg {
  d: path("M15.079 19.43L14.694 19.73C13.639 20.55 12.339 21 11 21C7.686 21 5 18.31 5 15C5 13.22 5.773 11.63 7 10.53L7.333 10.23M11 8V15H17.101L19.054 20.67M11 11H16");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pg1m36bkh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 4C13 5.1 12.105 6 11 6C9.895 6 9 5.1 9 4C9 2.9 9.895 2 11 2C12.105 2 13 2.9 13 4Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="d2he7-vfg"/><path clip-rule="evenodd" class="pg1m36bkh"/></g>`,
		"fallback": "keyline-icons:wheelchair-sharp",
	});
}

export default Component;
