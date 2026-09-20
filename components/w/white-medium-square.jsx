import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i43r0eb1n.css';
import '../../css/y/y3rmrqmdo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i43r0eb1n"/><path class="y3rmrqmdo"/>`,
		"fallback": "openmoji:white-medium-square",
	});
}

export default Component;
