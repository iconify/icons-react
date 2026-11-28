import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l21nl5osl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l21nl5osl"/>`,
		"fallback": "iconaut:whale-solid",
	});
}

export default Component;
