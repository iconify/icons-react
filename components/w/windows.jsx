import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqmaq6n1u.css';

const viewBox = {"width":768,"height":709};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqmaq6n1u"/>`,
		"fallback": "ls:windows",
	});
}

export default Component;
