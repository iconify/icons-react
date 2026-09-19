import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtdvku_qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtdvku_qk"/>`,
		"fallback": "akar-icons:wine-glass",
	});
}

export default Component;
