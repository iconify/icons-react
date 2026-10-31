import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s72q8wbtp.css';
import '../../css/q/qf24h3b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s72q8wbtp"/><path class="qf24h3b2e"/></g>`,
		"fallback": "coolicons:wine-duocolor-round",
	});
}

export default Component;
