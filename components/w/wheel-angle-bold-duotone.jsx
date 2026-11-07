import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se4__r1yu.css';
import '../../css/j/jbg5enbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="se4__r1yu"/><path class="jbg5enbce"/>`,
		"fallback": "solar:wheel-angle-bold-duotone",
	});
}

export default Component;
