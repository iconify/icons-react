import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jlzxp4qwe.css';
import '../../css/r/ream8ob_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jlzxp4qwe"/><ellipse class="ream8ob_n"/></g>`,
		"fallback": "thesvg:yi",
	});
}

export default Component;
