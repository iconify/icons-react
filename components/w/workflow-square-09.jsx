import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qp7r8c1tv.css';
import '../../css/y/y9mfijbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qp7r8c1tv"/><path class="y9mfijbgp"/></g>`,
		"fallback": "hugeicons:workflow-square-09",
	});
}

export default Component;
