import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/y/ydht5db_k.css';
import '../../css/q/q1j7fgoua.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/p/p61-0ivql.css';
import '../../css/y/yflhfssqa.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="ydht5db_k"/><path class="q1j7fgoua"/></g><g class="ij2x_72vy"><path class="p61-0ivql"/><path class="yflhfssqa"/></g>`,
		"fallback": "openmoji:world-map",
	});
}

export default Component;
