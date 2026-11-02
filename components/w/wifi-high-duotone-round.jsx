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
		"content": `<style>.smw7abbpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19h.01M9 16c1.427-2.14 4.573-2.14 6 0m-9-3c3.123-3.747 8.878-3.747 12 0M3 10c4.79-5.389 13.21-5.389 18 0");
}
</style><path class="smw7abbpj"/>`,
		"fallback": "coolicons:wifi-high-duotone-round",
	});
}

export default Component;
