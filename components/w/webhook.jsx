import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/h5vmd5bdo.css';
import '../../css/q/qzpg4myku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGx5ZC7cJE" x1="8.99" x2="14.99" y1="2.76" y2="21.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGx5ZC7cJE)" class="h5vmd5bdo"/><path class="qzpg4myku wm-shine"/></g>`,
		"fallback": "withicons-utsav:webhook",
	});
}

export default Component;
