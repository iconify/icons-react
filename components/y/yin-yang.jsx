import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r_r_i4-qi {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88a40 40 0 0 1 0 80a56 56 0 0 0-50.61 80A88 88 0 0 1 40 128m88 88a40 40 0 0 1 0-80a56 56 0 0 0 50.61-79.95A88 88 0 0 1 128 216m12-40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-24-96a12 12 0 1 1 12 12a12 12 0 0 1-12-12");
}
</style><path class="r_r_i4-qi"/>`,
		"fallback": "ph:yin-yang",
	});
}

export default Component;
