import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/fyj36nc6u.css';
import '../../css/d/d-zc8ix9u.css';
import '../../css/d/dofgg5b_l.css';
import '../../css/k/k3gh8wbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjaEal3CB" x1="9.99" x2="13.99" y1="2.76" y2="21.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="fyj36nc6u wm-k"/><path class="d-zc8ix9u wm-deco"/><path fill="url(#SVGjaEal3CB)" class="dofgg5b_l wm-k"/><path class="k3gh8wbvt wm-shadow"/></g>`,
		"fallback": "withicons-valentine:webhook",
	});
}

export default Component;
