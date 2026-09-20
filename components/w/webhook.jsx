import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q1ugeuw_g.css';
import '../../css/u/ug3_-lb-e.css';
import '../../css/s/s5stddcrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q1ugeuw_g"/><path class="ug3_-lb-e"/><path class="s5stddcrx"/></g>`,
		"fallback": "tabler:webhook",
	});
}

export default Component;
