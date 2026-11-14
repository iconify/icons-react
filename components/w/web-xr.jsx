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
		"content": `<style>.anxn3rtfw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.875 2.75h10.25q2.123 0 3.624 1.501t1.501 3.624v8.25q0 2.123-1.501 3.624t-3.624 1.501H6.875q-2.123 0-3.624-1.501T1.75 16.125v-8.25q0-2.123 1.501-3.624T6.875 2.75M8 10.25q-2.75 0-2.75 2.75v2.5q0 2.75 2.75 2.75h1.5q.167 0 .318-.071t.258-.199l1.025-1.23h1.798l1.025 1.23q.107.128.258.199t.318.071H16q2.75 0 2.75-2.75V13q0-2.75-2.75-2.75z");
}
</style><path class="anxn3rtfw"/>`,
		"fallback": "uix-solid:web-xr",
	});
}

export default Component;
