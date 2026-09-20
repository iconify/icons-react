import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt924p9ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt924p9ep"/>`,
		"fallback": "mdi:wireless-router",
	});
}

export default Component;
