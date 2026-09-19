import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6_rnobfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n6_rnobfx"/>`,
		"fallback": "flowbite:whiskey-glass-solid",
	});
}

export default Component;
