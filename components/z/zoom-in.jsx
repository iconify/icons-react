import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lji_-4zcb.css';
import '../../css/o/on-nrcbsr.css';
import '../../css/n/nm2jzmb-d.css';
import '../../css/r/r8sqoincp.css';
import '../../css/t/t_z8dvbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lji_-4zcb wm-shadow"/><path class="on-nrcbsr"/><path class="nm2jzmb-d"/><path class="r8sqoincp"/><path class="t_z8dvbue"/></g>`,
		"fallback": "withicons-retro:zoom-in",
	});
}

export default Component;
