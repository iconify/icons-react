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
		"content": `<style>.ys5_f_-fp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25V7.5m0 0q2.6-2.38 0-4.75q-2.6 2.37 0 4.75Zm0 4q-.06-3.19-3.25-3q.06 3.19 3.25 3Zm0 0q3.19.19 3.25-3q-3.19-.19-3.25 3Zm0 5.75q-.06-3.19-3.25-3q.06 3.19 3.25 3Zm0 0q3.19.19 3.25-3q-3.19-.19-3.25 3Z");
}
</style><path class="ys5_f_-fp"/>`,
		"fallback": "iconoven:wheat-ear-sharp",
	});
}

export default Component;
