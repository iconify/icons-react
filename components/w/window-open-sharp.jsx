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
		"content": `<style>.pho1rd3yq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 21V3H20V21M1 21H23M4 13H20M12 3V13");
}
</style><path class="pho1rd3yq"/>`,
		"fallback": "keyline-icons:window-open-sharp",
	});
}

export default Component;
