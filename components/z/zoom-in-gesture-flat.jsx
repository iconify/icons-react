import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7q1c49ot.css';
import '../../css/w/w_gffccrx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7q1c49ot"/><path class="w_gffccrx"/></g>`,
		"fallback": "streamline-plump-color:zoom-in-gesture-flat",
	});
}

export default Component;
