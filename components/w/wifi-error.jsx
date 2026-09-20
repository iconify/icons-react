import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/z/zmslvebwb.css';
import '../../css/u/uc7v4v_cp.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 4)" class="jtowsomii"><path class="zmslvebwb"/><circle class="uc7v4v_cp"/></g>`,
		"fallback": "system-uicons:wifi-error",
	});
}

export default Component;
