import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ha84-bnhp.css';
import '../../css/y/yeeki1w9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ha84-bnhp"/><path class="yeeki1w9v"/></g>`,
		"fallback": "keyline-icons:zap-sparkles-fill",
	});
}

export default Component;
