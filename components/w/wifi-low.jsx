import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jgfzxeqxz.css';
import '../../css/q/qn05n7bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jgfzxeqxz"/><path class="qn05n7bxz"/></g>`,
		"fallback": "withicons-bauhaus:wifi-low",
	});
}

export default Component;
