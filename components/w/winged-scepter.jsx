import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzbm7hbfm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzbm7hbfm"/>`,
		"fallback": "game-icons:winged-scepter",
	});
}

export default Component;
