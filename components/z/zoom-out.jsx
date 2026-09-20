import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8_2qedgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8_2qedgl"/>`,
		"fallback": "typcn:zoom-out",
	});
}

export default Component;
