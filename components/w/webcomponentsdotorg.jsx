import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suw6_ccmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suw6_ccmx"/>`,
		"fallback": "thesvg:webcomponentsdotorg",
	});
}

export default Component;
