import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/m/m64dpmhiu.css';
import '../../css/a/awqi1bs-e.css';
import '../../css/x/xb7vwoglv.css';
import '../../css/c/c1-9x6b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="m64dpmhiu wm-k"/><path class="awqi1bs-e wm-deco"/><path fill="url(#SVG8cgrrczU)" class="wm-k xb7vwoglv"/><path class="c1-9x6b7m wm-shadow"/></g>`,
		"fallback": "withicons-valentine:wine",
	});
}

export default Component;
