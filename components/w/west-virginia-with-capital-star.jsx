import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsv1ptbvq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsv1ptbvq"/>`,
		"fallback": "pinhead:west-virginia-with-capital-star",
	});
}

export default Component;
