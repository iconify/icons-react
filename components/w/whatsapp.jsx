import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2083vbts.css';
import '../../css/w/w13l2qbgr.css';
import '../../css/i/iak6gdcqz.css';
import '../../css/a/aute6acvy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c2083vbts"/><path class="w13l2qbgr"/><path class="iak6gdcqz"/><path class="aute6acvy"/></g>`,
		"fallback": "streamline-color:whatsapp",
	});
}

export default Component;
