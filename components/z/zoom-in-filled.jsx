import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr_q1qn4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wr_q1qn4b"/>`,
		"fallback": "lsicon:zoom-in-filled",
	});
}

export default Component;
