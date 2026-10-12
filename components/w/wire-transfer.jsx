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
		"content": `<style>.ch2k9-bhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.32 16.26l2.61-2.27q.57-.49 1.14 0l2.61 2.27q.57.49-.18.49h-6q-.75 0-.18-.49m1.68.49v4.5m3-4.5v4.5m-5.25 0h7.5m4.07-15.74l2.61-2.27q.57-.49 1.14 0l2.61 2.27q.57.49-.18.49h-6q-.75 0-.18-.49M16 6v4.5M19 6v4.5m-5.25 0h7.5m-14.75 0l4.25-4.25m-3 0h3v3");
}
</style><path class="ch2k9-bhv"/>`,
		"fallback": "iconoven:wire-transfer",
	});
}

export default Component;
