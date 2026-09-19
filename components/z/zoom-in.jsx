import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaxkd8bcd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaxkd8bcd"/>`,
		"fallback": "f7:zoom-in",
	});
}

export default Component;
