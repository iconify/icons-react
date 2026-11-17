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
		"content": `<style>.gh51cacsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.77 5.77L10 3h7l-4 7h5l-2 2m-3.5 3.5L7 21l2-9H6l.923-2.077M2 5l17 17");
}
</style><path class="gh51cacsc"/>`,
		"fallback": "coolicons:zap-alt-off-sharp",
	});
}

export default Component;
