import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7o3_0bxs.css';
import '../../css/o/o6wugel-l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j7o3_0bxs"/><path class="o6wugel-l"/></g>`,
		"fallback": "streamline-color:whatsapp-flat",
	});
}

export default Component;
