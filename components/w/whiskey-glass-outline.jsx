import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz56o3bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz56o3bzg"/>`,
		"fallback": "flowbite:whiskey-glass-outline",
	});
}

export default Component;
