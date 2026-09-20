import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4r5n9byo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/xa8zo-wvi.css';
import '../../css/n/n05ob-bph.css';
import '../../css/n/nuw89-yss.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4r5n9byo"/><g class="jn8qy4bru"><path class="xa8zo-wvi"/><path class="n05ob-bph"/><path class="nuw89-yss"/></g>`,
		"fallback": "openmoji:wheelbarrow",
	});
}

export default Component;
