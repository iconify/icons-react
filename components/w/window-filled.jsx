import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k9nnn7vsn.css';
import '../../css/j/jdzt_bc_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k9nnn7vsn"/><path class="jdzt_bc_i"/></g>`,
		"fallback": "reicon:window-filled",
	});
}

export default Component;
