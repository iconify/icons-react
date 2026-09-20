import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/f/f6r4u0dcm.css';
import '../../css/d/dxmmmk1qu.css';
import '../../css/f/fspniabin.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="f6r4u0dcm"/><path class="dxmmmk1qu"/><path class="fspniabin"/></g>`,
		"fallback": "system-uicons:window-collapse-left",
	});
}

export default Component;
