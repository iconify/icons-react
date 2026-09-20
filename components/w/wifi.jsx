import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/o/om1jfjbon.css';
import '../../css/h/hghunxbuh.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 6)" class="jtowsomii"><path class="om1jfjbon"/><circle class="hghunxbuh"/></g>`,
		"fallback": "system-uicons:wifi",
	});
}

export default Component;
