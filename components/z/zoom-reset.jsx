import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/d/do43ab4pq.css';
import '../../css/v/vkljnvb-w.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="do43ab4pq"/><path class="vkljnvb-w"/></g>`,
		"fallback": "system-uicons:zoom-reset",
	});
}

export default Component;
