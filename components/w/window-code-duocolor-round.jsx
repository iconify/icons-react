import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qvhxydska.css';
import '../../css/w/w-y_52bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qvhxydska"/><path class="w-y_52bbf"/></g>`,
		"fallback": "coolicons:window-code-duocolor-round",
	});
}

export default Component;
