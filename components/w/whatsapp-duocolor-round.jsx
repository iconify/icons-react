import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxxmst8ee.css';
import '../../css/n/naa3wj7kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mxxmst8ee"/><path class="naa3wj7kp"/></g>`,
		"fallback": "coolicons:whatsapp-duocolor-round",
	});
}

export default Component;
