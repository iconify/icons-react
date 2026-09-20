import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrw8l6u1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrw8l6u1i"/>`,
		"fallback": "streamline-logos:xbox-live-logo",
	});
}

export default Component;
