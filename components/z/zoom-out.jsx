import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lji_-4zcb.css';
import '../../css/l/lqiam_bli.css';
import '../../css/r/rqc0ncbml.css';
import '../../css/f/f_18h-byr.css';
import '../../css/n/n81auxu-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lji_-4zcb wm-shadow"/><path class="lqiam_bli"/><path class="rqc0ncbml"/><path class="f_18h-byr"/><path class="n81auxu-j"/></g>`,
		"fallback": "withicons-retro:zoom-out",
	});
}

export default Component;
