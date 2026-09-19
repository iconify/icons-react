import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gblm57xqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gblm57xqr"/>`,
		"fallback": "game-icons:zat-gun",
	});
}

export default Component;
