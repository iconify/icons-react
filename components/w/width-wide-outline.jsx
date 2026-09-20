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
		"content": `<style>.u7--uqq4u {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h2V6H4zm4 0h8V6H8zm10 0h2V6h-2zM8 6v12z");
}
</style><path class="u7--uqq4u"/>`,
		"fallback": "material-symbols:width-wide-outline",
	});
}

export default Component;
