import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu2zx_k_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xu2zx_k_x"/>`,
		"fallback": "flowbite:zoom-in-solid",
	});
}

export default Component;
