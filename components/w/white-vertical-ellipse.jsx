import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa1_sbb_c.css';
import '../../css/c/c4dmikbsb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa1_sbb_c"/><path class="c4dmikbsb"/>`,
		"fallback": "openmoji:white-vertical-ellipse",
	});
}

export default Component;
