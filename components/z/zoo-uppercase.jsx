import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp__ydbjh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp__ydbjh"/>`,
		"fallback": "pinhead:zoo-uppercase",
	});
}

export default Component;
