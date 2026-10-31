import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q3dpwpbvj.css';
import '../../css/c/crq9tybqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q3dpwpbvj"/><path class="crq9tybqe"/></g>`,
		"fallback": "coolicons:x-duocolor-round",
	});
}

export default Component;
