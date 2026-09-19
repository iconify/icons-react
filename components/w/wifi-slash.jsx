import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyqpd9b6v.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyqpd9b6v"/>`,
		"fallback": "fa-solid:wifi-slash",
	});
}

export default Component;
