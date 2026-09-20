import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obc4b9b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obc4b9b2d"/>`,
		"fallback": "thesvg-color:wireshark",
	});
}

export default Component;
