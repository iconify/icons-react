import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny_6rsfhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny_6rsfhj"/>`,
		"fallback": "streamline-logos:xbox-live-logo-solid",
	});
}

export default Component;
