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
		"content": `<style>.z1bypac1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25V7.5m0 0q2.6-2.38 0-4.75q-2.6 2.37 0 4.75m0 4q-.06-3.19-3.25-3q.06 3.19 3.25 3m0 0q3.19.19 3.25-3q-3.19-.19-3.25 3m0 5.75q-.06-3.19-3.25-3q.06 3.19 3.25 3m0 0q3.19.19 3.25-3q-3.19-.19-3.25 3");
}
</style><path class="z1bypac1h"/>`,
		"fallback": "iconoven:wheat-ear",
	});
}

export default Component;
