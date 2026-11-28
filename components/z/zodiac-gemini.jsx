import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4d4yhbsm.css';
import '../../css/m/mgp154b3r.css';
import '../../css/l/l9jmlvbqj.css';
import '../../css/u/u71yix3kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l4d4yhbsm"/><path class="mgp154b3r"/><path class="l9jmlvbqj"/><path class="u71yix3kf"/></g>`,
		"fallback": "iconaut:zodiac-gemini",
	});
}

export default Component;
