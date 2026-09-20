import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdnfzybif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdnfzybif"/>`,
		"fallback": "streamline-logos:whitesource-logo-1-block",
	});
}

export default Component;
