import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkwnocuwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkwnocuwd"/>`,
		"fallback": "token:zkid",
	});
}

export default Component;
