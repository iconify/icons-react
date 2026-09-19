import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtaeff6hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtaeff6hs"/>`,
		"fallback": "guidance:wheelchair-tennis",
	});
}

export default Component;
