import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls_43mben.css';
import '../../css/p/pxmjy7w2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls_43mben"/><path class="pxmjy7w2r"/></g>`,
		"fallback": "coolicons:window-terminal-duotone-round",
	});
}

export default Component;
