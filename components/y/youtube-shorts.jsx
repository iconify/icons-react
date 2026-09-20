import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrmvtw-nq.css';
import '../../css/j/jmyb8n3ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vrmvtw-nq"/><path class="jmyb8n3ao"/></g>`,
		"fallback": "proicons:youtube-shorts",
	});
}

export default Component;
