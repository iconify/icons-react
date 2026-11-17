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
		"content": `<style>.azso-ybkk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 2C20.486 2 20.902 2.35 20.985 2.829L22.89 13.829C22.94 14.12 22.86 14.418 22.67 14.644C22.48 14.869 22.199 15 21.904 15H21V20H23V22H1V20H3V15H2.096C1.801 15 1.521 14.869 1.331 14.644C1.141 14.418 1.06 14.12 1.11 13.829L3.015 2.829L3.034 2.741C3.15 2.308 3.544 2 4 2H20ZM5 15V20H19V15H5ZM11 4V7.5H4.033V9.5H11V13H13V9.5H19.968V7.5H13V4H11Z");
}
</style><path clip-rule="evenodd" class="azso-ybkk"/>`,
		"fallback": "keyline-icons:window-awning-open-sharp-fill",
	});
}

export default Component;
