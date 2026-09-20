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
		"content": `<style>.y--ir4bwh {
  fill: currentColor;
  d: path("M6 19h12v-6H6zm0 2q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm0-10h5v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h5V5H6zm0 8h12z");
}
</style><path class="y--ir4bwh"/>`,
		"fallback": "material-symbols:window-closed-outline-rounded",
	});
}

export default Component;
