import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw-vxn9lq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw-vxn9lq"/>`,
		"fallback": "streamline:windows",
	});
}

export default Component;
