import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/d/dfj3gnbla.css';
import '../../css/g/gkjskok3y.css';
import '../../css/r/r5u0o18ll.css';
import '../../css/c/c3ep-w5ng.css';
import '../../css/m/mx66r9q5s.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGZjQyxehu" cx="9.98" cy="14.45" r="10.68" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="dfj3gnbla wm-shadow"/><path fill="url(#SVGZjQyxehu)" class="gkjskok3y wm-k"/><path class="r5u0o18ll wm-k"/><path class="c3ep-w5ng wm-shine"/><path class="mx66r9q5s wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:wifi-low",
	});
}

export default Component;
