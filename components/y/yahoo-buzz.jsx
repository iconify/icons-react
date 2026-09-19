import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmhsfe4-v.css';

const viewBox = {"width":320,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmhsfe4-v"/>`,
		"fallback": "ps:yahoo-buzz",
	});
}

export default Component;
