import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgpn75uou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgpn75uou"/>`,
		"fallback": "noviair:wifi-check",
	});
}

export default Component;
