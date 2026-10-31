import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p1evxrbfr.css';
import '../../css/e/e0y42mbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p1evxrbfr"/><path class="e0y42mbja"/></g>`,
		"fallback": "coolicons:webcam-duocolor-round",
	});
}

export default Component;
