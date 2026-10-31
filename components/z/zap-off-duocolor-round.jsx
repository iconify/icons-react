import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sr6trvpei.css';
import '../../css/e/ehqeh5b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sr6trvpei"/><path class="ehqeh5b9h"/></g>`,
		"fallback": "coolicons:zap-off-duocolor-round",
	});
}

export default Component;
