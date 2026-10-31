import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/iscc6zblx.css';
import '../../css/i/i-koiwbwa.css';
import '../../css/m/mkdyessck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7ScGTmeB" x1="9" x2="15" y1="1.12" y2="21.82" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7ScGTmeB)" class="iscc6zblx"/><path class="i-koiwbwa wm-a"/><path class="mkdyessck wm-shine"/></g>`,
		"fallback": "withicons-utsav:wreath",
	});
}

export default Component;
