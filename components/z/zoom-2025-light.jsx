import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5_pvnbbf.css';
import '../../css/w/wgglyuewc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5_pvnbbf"/><path class="wgglyuewc"/>`,
		"fallback": "thesvg-color:zoom-2025-light",
	});
}

export default Component;
