import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-qlm7bhm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-qlm7bhm"/>`,
		"fallback": "dashicons:wordpress-alt",
	});
}

export default Component;
