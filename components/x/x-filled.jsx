import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnpk5mb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnpk5mb4t"/>`,
		"fallback": "griddy-icons:x-filled",
	});
}

export default Component;
