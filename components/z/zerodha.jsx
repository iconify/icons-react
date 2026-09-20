import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upn1fdbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upn1fdbdu"/>`,
		"fallback": "thesvg-color:zerodha",
	});
}

export default Component;
