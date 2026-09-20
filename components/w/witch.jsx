import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qho7iu1hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qho7iu1hx"/>`,
		"fallback": "token:witch",
	});
}

export default Component;
