import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gtmr7ugch.css';
import '../../css/q/qts689b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gtmr7ugch"/><path class="qts689b8w"/></g>`,
		"fallback": "coolicons:zodiac-pisces-duocolor-round",
	});
}

export default Component;
