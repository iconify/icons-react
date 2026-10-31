import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hjw8ozblr.css';
import '../../css/k/k_hy43zrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hjw8ozblr"/><path class="k_hy43zrd"/></g>`,
		"fallback": "coolicons:zodiac-taurus-duocolor-round",
	});
}

export default Component;
