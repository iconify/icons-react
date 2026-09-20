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
		"content": `<style>.hzlt9gbsj {
  fill: currentColor;
  d: path("M17.116 19.596V4.385H18.5v15.211zm-13 1.635V2.769h12v18.462zM19.5 17.98V6h.885v11.98zM5.115 20.23h10V3.769h-10zm0-16.462V20.23z");
}
</style><path class="hzlt9gbsj"/>`,
		"fallback": "material-symbols-light:web-stories-outline-sharp",
	});
}

export default Component;
