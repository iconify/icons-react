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
		"content": `<style>.hguwsyb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 9H9v1a5 5 0 0 0 5 5h1v-2M3 21l1-5a8.944 8.944 0 1 1 4 4Z");
}
</style><path class="hguwsyb5j"/>`,
		"fallback": "coolicons:whatsapp-round",
	});
}

export default Component;
