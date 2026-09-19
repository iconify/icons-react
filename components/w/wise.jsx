import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx0ijld1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx0ijld1r"/>`,
		"fallback": "hugeicons:wise",
	});
}

export default Component;
