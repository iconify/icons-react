import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox05h0bip.css';
import '../../css/t/t5n35bb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox05h0bip"/><path class="t5n35bb2q"/>`,
		"fallback": "thesvg-color:xuanyuan",
	});
}

export default Component;
