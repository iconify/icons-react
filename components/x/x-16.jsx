import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu7-jgb_l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pu7-jgb_l"/>`,
		"fallback": "qlementine-icons:x-16",
	});
}

export default Component;
