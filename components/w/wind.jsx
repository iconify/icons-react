import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/fx8xh8b0v.css';
import '../../css/s/snv7-rdek.css';
import '../../css/d/dgo9h51bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGnbX1FbNj" x1="9.99" x2="13.99" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="fx8xh8b0v wm-k"/><path class="snv7-rdek wm-deco"/><path fill="url(#SVGnbX1FbNj)" class="dgo9h51bd wm-k"/></g>`,
		"fallback": "withicons-valentine:wind",
	});
}

export default Component;
