import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/et8vz1all.css';
import '../../css/p/p2ubz38vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="et8vz1all"/><path class="p2ubz38vz"/></g>`,
		"fallback": "coolicons:wheelchair-duocolor-round",
	});
}

export default Component;
