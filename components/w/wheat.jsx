import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kob9tft5y.css';
import '../../css/i/i_vsoacii.css';
import '../../css/q/qh5mo1bpm.css';
import '../../css/n/nf5nu5vzp.css';
import '../../css/h/h8vgu_aim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kob9tft5y wm-shadow"/><path class="i_vsoacii"/><path class="qh5mo1bpm"/><path class="nf5nu5vzp"/><path class="h8vgu_aim"/></g>`,
		"fallback": "withicons-retro:wheat",
	});
}

export default Component;
