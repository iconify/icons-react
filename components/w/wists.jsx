import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf1_q-baz.css';

const viewBox = {"width":464,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf1_q-baz"/>`,
		"fallback": "ps:wists",
	});
}

export default Component;
