import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mms4_pbmy.css';
import '../../css/m/mxyt-qc_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mms4_pbmy"/><path class="mxyt-qc_z"/></g>`,
		"fallback": "coolicons:x-duotone-round",
	});
}

export default Component;
