import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-fsm3b5x.css';

const viewBox = {"width":160,"height":62};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-fsm3b5x"/>`,
		"fallback": "thesvg-color:zyft",
	});
}

export default Component;
