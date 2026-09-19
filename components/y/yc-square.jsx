import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axti0sr1w.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axti0sr1w"/>`,
		"fallback": "fa:yc-square",
	});
}

export default Component;
