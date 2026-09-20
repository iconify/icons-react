import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahdgfnwzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahdgfnwzn"/>`,
		"fallback": "thesvg-color:what3words",
	});
}

export default Component;
