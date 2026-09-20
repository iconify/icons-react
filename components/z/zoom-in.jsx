import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/mr99q4ujx.css';
import '../../css/o/ok2yorv_a.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 3)" class="jtowsomii"><circle class="mr99q4ujx"/><path class="ok2yorv_a"/></g>`,
		"fallback": "system-uicons:zoom-in",
	});
}

export default Component;
