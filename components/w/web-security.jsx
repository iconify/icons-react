import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/il82e_lnh.css';
import '../../css/f/fucf0abgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="il82e_lnh"/><path class="fucf0abgw"/></g>`,
		"fallback": "hugeicons:web-security",
	});
}

export default Component;
