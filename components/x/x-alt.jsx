import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcdky6nmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcdky6nmc"/>`,
		"fallback": "meteor-icons:x-alt",
	});
}

export default Component;
