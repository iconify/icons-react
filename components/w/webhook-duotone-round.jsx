import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey3ko8bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey3ko8bcj"/>`,
		"fallback": "coolicons:webhook-duotone-round",
	});
}

export default Component;
