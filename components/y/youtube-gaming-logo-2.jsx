import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytv7pabhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytv7pabhm"/>`,
		"fallback": "streamline-logos:youtube-gaming-logo-2",
	});
}

export default Component;
