import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xk62mfeqn.css';
import '../../css/c/ch9pah41i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xk62mfeqn"/><path class="ch9pah41i"/></g>`,
		"fallback": "tabler:world-question",
	});
}

export default Component;
