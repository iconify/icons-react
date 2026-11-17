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
		"content": `<style>.bnvh8bcwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 21V4C4 3.448 4.448 3 5 3H19C19.552 3 20 3.448 20 4V21M2 21H22M4 13H20M12 3V13");
}
</style><path class="bnvh8bcwy"/>`,
		"fallback": "keyline-icons:window-open",
	});
}

export default Component;
