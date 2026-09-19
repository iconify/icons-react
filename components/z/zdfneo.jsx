import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyrkljz5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyrkljz5q"/>`,
		"fallback": "cbi:zdfneo",
	});
}

export default Component;
