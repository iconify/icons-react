import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7f-rg6_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7f-rg6_c"/>`,
		"fallback": "thesvg:xo",
	});
}

export default Component;
