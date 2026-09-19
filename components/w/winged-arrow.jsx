import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fza9v8b0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fza9v8b0x"/>`,
		"fallback": "game-icons:winged-arrow",
	});
}

export default Component;
