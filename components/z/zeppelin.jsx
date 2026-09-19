import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eup9n7bmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eup9n7bmx"/>`,
		"fallback": "game-icons:zeppelin",
	});
}

export default Component;
