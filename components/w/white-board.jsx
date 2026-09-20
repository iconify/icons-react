import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/p-vqvcc8s.css';
import '../../css/p/pxun9jb6k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="p-vqvcc8s"/><path class="pxun9jb6k"/></g>`,
		"fallback": "marketeq:white-board",
	});
}

export default Component;
