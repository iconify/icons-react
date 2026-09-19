import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tibv-mb0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 10.145l10.88 27.454l3.967-9.312l-5.856-14.494zm39 .256L32.62 37.855l-3.967-9.311l5.856-14.495zm-23.854 8.223l4.277 10.612l4.027-10.544l-4.027 1.697z");
}
</style><path class="tibv-mb0e"/>`,
		"fallback": "arcticons:wibuku",
	});
}

export default Component;
