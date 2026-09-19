import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8fqkhurf.css';
import '../../css/t/ti0i6rbbm.css';
import '../../css/x/xtlzm-3op.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j8fqkhurf"/><path class="ti0i6rbbm"/><path class="xtlzm-3op"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-student",
	});
}

export default Component;
