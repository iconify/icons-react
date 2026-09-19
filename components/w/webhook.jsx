import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjblqxbkz.css';
import '../../css/m/mhg07abei.css';
import '../../css/j/jamog_u4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjblqxbkz"/><path class="mhg07abei"/><path class="jamog_u4j"/>`,
		"fallback": "boxicons:webhook",
	});
}

export default Component;
