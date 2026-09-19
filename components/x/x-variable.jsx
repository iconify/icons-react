import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pxx4wccbo.css';
import '../../css/c/clqbwcczo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pxx4wccbo"/><path class="clqbwcczo"/></g>`,
		"fallback": "hugeicons:x-variable",
	});
}

export default Component;
