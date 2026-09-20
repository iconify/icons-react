import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogqr599um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogqr599um"/>`,
		"fallback": "thesvg-color:yunohost",
	});
}

export default Component;
