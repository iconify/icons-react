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
		"content": `<style>.yobn5gp6d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.625 1.75h-9.25q-2.123 0-3.624 1.501T2.25 6.875v10.25q0 2.123 1.501 3.624t3.624 1.501h9.25q2.123 0 3.624-1.501t1.501-3.624V6.875q0-2.123-1.501-3.624T16.625 1.75M5.75 10q0-2.543 1.881-4.189Q9.415 4.25 12 4.25t4.369 1.561Q18.25 7.457 18.25 10q0 2.388-1.75 3.653V16.5q0 2-2 2h-5q-2 0-2-2v-2.847Q5.75 12.388 5.75 10");
}
</style><path class="yobn5gp6d"/>`,
		"fallback": "uix-solid:xray-skull",
	});
}

export default Component;
