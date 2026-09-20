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
		"content": `<style>.hmb-ye3pq {
  fill: currentColor;
  d: path("M168 104a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-56 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m112 92h-84v-8.87a84 84 0 1 0-24 0V196H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24M68 104a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60");
}
</style><path class="hmb-ye3pq"/>`,
		"fallback": "ph:webcam-bold",
	});
}

export default Component;
