import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq8_gvx6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq8_gvx6t"/>`,
		"fallback": "thesvg:zerodha",
	});
}

export default Component;
