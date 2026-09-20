import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-r1m6bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b-r1m6bhg"/>`,
		"fallback": "streamline-logos:wordpress-logo-2-block",
	});
}

export default Component;
