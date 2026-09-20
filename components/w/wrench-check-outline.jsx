import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrw03cjgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrw03cjgo"/>`,
		"fallback": "mdi:wrench-check-outline",
	});
}

export default Component;
