import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbem7bc9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rbem7bc9m"/>`,
		"fallback": "flowbite:x-circle-solid",
	});
}

export default Component;
