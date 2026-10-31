import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l0qm7i0mg.css';
import '../../css/v/vy7vn8b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l0qm7i0mg"/><path class="vy7vn8b1q"/></g>`,
		"fallback": "coolicons:zoom-out-duocolor-round",
	});
}

export default Component;
