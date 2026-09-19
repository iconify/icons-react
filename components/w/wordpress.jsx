import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aytj6ogee.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aytj6ogee"/>`,
		"fallback": "ps:wordpress",
	});
}

export default Component;
