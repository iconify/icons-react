import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyf7m_beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyf7m_beh"/>`,
		"fallback": "uil:wifi-router",
	});
}

export default Component;
