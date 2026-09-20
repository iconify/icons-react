import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgf6p-wjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgf6p-wjx"/>`,
		"fallback": "uit:window-section",
	});
}

export default Component;
