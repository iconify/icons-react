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
		"content": `<style>.qrg4yrmcl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4L11 4L11 10L3 10L3 4ZM13 14L21 14L21 20L13 20L13 14ZM7 10L7 17L13 17");
}
</style><path class="qrg4yrmcl"/>`,
		"fallback": "keyline-icons:workflow-sharp",
	});
}

export default Component;
