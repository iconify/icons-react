import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l861pkbea.css';
import '../../css/t/tvjwpgbps.css';
import '../../css/r/rrchmn0ev.css';
import '../../css/i/i0zsydbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l861pkbea wm-k"/><path class="tvjwpgbps wm-deco"/><path class="rrchmn0ev wm-k"/><path class="i0zsydbyf wm-shadow"/></g>`,
		"fallback": "withicons-valentine:zap",
	});
}

export default Component;
