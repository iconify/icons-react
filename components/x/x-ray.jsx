import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vbnv1kbxq.css';
import '../../css/d/dgtoqqfwz.css';
import '../../css/r/rwolggbaa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vbnv1kbxq"/><path class="dgtoqqfwz"/><path class="rwolggbaa"/></g>`,
		"fallback": "fluent-emoji-flat:x-ray",
	});
}

export default Component;
