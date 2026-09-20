import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nco9tjboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nco9tjboe"/>`,
		"fallback": "streamline-logos:whitesource-logo-2",
	});
}

export default Component;
