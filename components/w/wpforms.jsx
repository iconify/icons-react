import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hixwd4_oj.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hixwd4_oj"/>`,
		"fallback": "fa:wpforms",
	});
}

export default Component;
