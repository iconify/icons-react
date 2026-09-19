import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y17g8zbpp.css';
import '../../css/f/fqr8fbbds.css';
import '../../css/k/kji6j-bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y17g8zbpp"/><path class="fqr8fbbds"/><path class="kji6j-bfs"/></g>`,
		"fallback": "hugeicons:workflow",
	});
}

export default Component;
