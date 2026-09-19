import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4cg4-ctc.css';

const viewBox = {"width":416,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4cg4-ctc"/>`,
		"fallback": "zmdi:widgets",
	});
}

export default Component;
