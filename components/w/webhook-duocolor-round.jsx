import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jzu91sbxz.css';
import '../../css/z/zw1gf9qvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jzu91sbxz"/><path class="zw1gf9qvq"/></g>`,
		"fallback": "coolicons:webhook-duocolor-round",
	});
}

export default Component;
