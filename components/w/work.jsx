import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jps6s0bnh.css';
import '../../css/p/pimetfb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jps6s0bnh"/><path class="pimetfb9k"/></g>`,
		"fallback": "hugeicons:work",
	});
}

export default Component;
