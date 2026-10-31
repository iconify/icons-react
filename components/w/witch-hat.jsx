import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/b/b1ehctkfr.css';
import '../../css/w/w95q4xx7n.css';
import '../../css/w/wz3rzp2ez.css';
import '../../css/y/y9s045b8k.css';
import '../../css/i/i41991bak.css';
import '../../css/c/c0cai109r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGMGHwndJD" cx="7.42" cy="7.43" r="24.93" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="b1ehctkfr wm-shadow"/><path fill="url(#SVGMGHwndJD)" class="w95q4xx7n wm-k"/><path class="wm-shine wz3rzp2ez"/><path class="wm-s y9s045b8k"/><path class="i41991bak wm-deco"/><path class="c0cai109r wm-deco"/></g>`,
		"fallback": "withicons-rangoli:witch-hat",
	});
}

export default Component;
