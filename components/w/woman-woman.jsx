import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctbtlsb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctbtlsb9s"/>`,
		"fallback": "mdi:woman-woman",
	});
}

export default Component;
