import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/u/uwp8snbmv.css';
import '../../css/o/o_y6rcbpa.css';
import '../../css/j/jhm9fcb4e.css';
import '../../css/j/j61mlso4x.css';
import '../../css/m/mx66r9q5s.css';
import '../../css/q/qmfhm82ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="uwp8snbmv wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="o_y6rcbpa wm-a"/><path fill="url(#SVGU00zieBw)" class="jhm9fcb4e wm-k"/><path class="j61mlso4x wm-shine"/><path class="mx66r9q5s wm-deco"/><path class="qmfhm82ih wm-deco"/></g>`,
		"fallback": "withicons-rangoli:workflow",
	});
}

export default Component;
