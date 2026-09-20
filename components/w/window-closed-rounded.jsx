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
		"content": `<style>.hj9fn-bmz {
  fill: currentColor;
  d: path("M7 18h10v-5H7zm-1 3q-.825 0-1.412-.587T4 19V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v14q0 .825-.587 1.413T18 21zm1-10h4v-.5q0-.2.15-.35t.35-.15h1q.2 0 .35.15t.15.35v.5h4V6H7zm-1 8h12V5H6z");
}
</style><path class="hj9fn-bmz"/>`,
		"fallback": "material-symbols:window-closed-rounded",
	});
}

export default Component;
