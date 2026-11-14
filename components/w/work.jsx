import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sa8m40o9w.css';
import '../../css/l/lcrisfboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sa8m40o9w"/><path class="lcrisfboa"/></g>`,
		"fallback": "hugeicons:work",
	});
}

export default Component;
