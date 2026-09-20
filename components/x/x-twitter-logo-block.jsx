import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwyht6g7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lwyht6g7u"/>`,
		"fallback": "streamline-logos:x-twitter-logo-block",
	});
}

export default Component;
