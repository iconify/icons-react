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
		"content": `<style>.kyk392uym {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 14H2.095L4 3H12M4 14H20M4 14V21M12 3H20L21.904 14H20M12 3V14M20 14V21M3.048 8.5H20.952M1 21H23");
}
</style><path class="kyk392uym"/>`,
		"fallback": "keyline-icons:window-awning-open-sharp",
	});
}

export default Component;
