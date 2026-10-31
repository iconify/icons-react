import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/c/c2x4n2bsa.css';
import '../../css/f/f82b9dbvz.css';
import '../../css/i/ihwueqbmx.css';
import '../../css/i/iuo97_v4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGjTnJDcIp" cx="7.02" cy="6.08" r="20.11" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="c2x4n2bsa wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="f82b9dbvz wm-a"/><path fill="url(#SVGjTnJDcIp)" class="ihwueqbmx wm-k"/><path class="iuo97_v4x wm-shine"/></g>`,
		"fallback": "withicons-rangoli:zoom-out",
	});
}

export default Component;
