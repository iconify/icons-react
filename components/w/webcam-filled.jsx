import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jipz93b5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jipz93b5m"/>`,
		"fallback": "ix:webcam-filled",
	});
}

export default Component;
