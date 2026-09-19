import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvx5yfbep.css';
import '../../css/t/t91s7oy2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvx5yfbep"/><path class="t91s7oy2f"/>`,
		"fallback": "cil:x-circle",
	});
}

export default Component;
