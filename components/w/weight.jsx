import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/uiv24rb7u.css';
import '../../css/n/npdimac6a.css';
import '../../css/v/vxe1x-b1z.css';
import '../../css/h/hzsm_kqtr.css';
import '../../css/h/hhmahf57k.css';
import '../../css/s/s8w4hibdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYinzhfXF" x1="10" x2="14" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="uiv24rb7u wm-k"/><path class="npdimac6a wm-k"/><path fill="url(#SVGYinzhfXF)" class="vxe1x-b1z wm-k"/><path class="hzsm_kqtr wm-shadow"/><path class="hhmahf57k wm-shine"/><path class="s8w4hibdw wm-shine"/></g>`,
		"fallback": "withicons-valentine:weight",
	});
}

export default Component;
