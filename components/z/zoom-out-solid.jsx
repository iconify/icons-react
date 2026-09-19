import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv2zj9ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iv2zj9ban"/>`,
		"fallback": "flowbite:zoom-out-solid",
	});
}

export default Component;
