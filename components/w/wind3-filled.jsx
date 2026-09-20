import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujrde0bpl.css';
import '../../css/g/gbrfp-h5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujrde0bpl"/><path class="gbrfp-h5y"/></g>`,
		"fallback": "reicon:wind3-filled",
	});
}

export default Component;
