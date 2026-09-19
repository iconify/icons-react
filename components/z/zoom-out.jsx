import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdl6x7-5w.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdl6x7-5w"/>`,
		"fallback": "el:zoom-out",
	});
}

export default Component;
