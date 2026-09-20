import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/h/hsj4o8rgo.css';
import '../../css/l/lkbg2fbgz.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="hsj4o8rgo"/><path class="lkbg2fbgz"/></g>`,
		"fallback": "system-uicons:wrap-back",
	});
}

export default Component;
