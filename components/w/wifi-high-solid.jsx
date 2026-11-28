import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ist0xi34j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ist0xi34j"/>`,
		"fallback": "iconaut:wifi-high-solid",
	});
}

export default Component;
