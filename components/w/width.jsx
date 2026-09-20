import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kljtf455q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kljtf455q"/>`,
		"fallback": "picon:width",
	});
}

export default Component;
