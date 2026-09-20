import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx77kv9ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx77kv9ea"/>`,
		"fallback": "token:zkp",
	});
}

export default Component;
