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
		"content": `<style>.ocj-w3b2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m21 11l-2 2l2 2l-5 2l-1 2c-.613 1.226-1.774 2-3 2s-2.387-.774-3-2l-1-2l-5-2l2-2l-2-2l1-1c.64-.64 1-1.72 1-3V5c0-.738.631-1.369 1-1l2 2c.64.64 1.72 1 3 1h2c1.28 0 2.36-.36 3-1l2-2c.369-.369 1 .262 1 1v2c0 1.28.36 2.36 1 3zM9 11l1 1m5-1l-1 1m-2 6h.01");
}
</style><path class="ocj-w3b2h"/>`,
		"fallback": "coolicons:wolf-round",
	});
}

export default Component;
