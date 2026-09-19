import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkmhukbwu.css';

const viewBox = {"width":700,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkmhukbwu"/>`,
		"fallback": "ls:wordpress",
	});
}

export default Component;
