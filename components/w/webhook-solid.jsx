import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai80b8bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai80b8bhw"/>`,
		"fallback": "withicons:webhook-solid",
	});
}

export default Component;
