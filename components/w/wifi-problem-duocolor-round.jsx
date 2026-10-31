import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/snkvu_bzj.css';
import '../../css/j/j9gdhp6om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="snkvu_bzj"/><path class="j9gdhp6om"/></g>`,
		"fallback": "coolicons:wifi-problem-duocolor-round",
	});
}

export default Component;
