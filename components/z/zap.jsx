import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l54d8tb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l54d8tb3j"/>`,
		"fallback": "mynaui:zap",
	});
}

export default Component;
