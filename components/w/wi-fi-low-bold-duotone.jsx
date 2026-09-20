import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j6jvj9bxd.css';
import '../../css/w/wcswsybcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j6jvj9bxd"/><path class="wcswsybcz"/></g>`,
		"fallback": "solar:wi-fi-low-bold-duotone",
	});
}

export default Component;
