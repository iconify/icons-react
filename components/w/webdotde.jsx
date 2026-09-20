import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avjga9l8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avjga9l8f"/>`,
		"fallback": "thesvg:webdotde",
	});
}

export default Component;
