import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnwo_2b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnwo_2b2z"/>`,
		"fallback": "simple-icons:zoho",
	});
}

export default Component;
