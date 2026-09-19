import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztm991_5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztm991_5l"/>`,
		"fallback": "game-icons:wine-bottle",
	});
}

export default Component;
