import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgod01b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgod01b8p"/>`,
		"fallback": "mdi:whistle",
	});
}

export default Component;
