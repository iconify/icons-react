import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdq6q2bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdq6q2bnd"/>`,
		"fallback": "feather:x-octagon",
	});
}

export default Component;
