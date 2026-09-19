import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve2l6q1jt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve2l6q1jt"/>`,
		"fallback": "bi:x",
	});
}

export default Component;
