import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_2inacgz.css';
import '../../css/l/lcg60_b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_2inacgz"/><path class="lcg60_b1o"/>`,
		"fallback": "token:zil",
	});
}

export default Component;
