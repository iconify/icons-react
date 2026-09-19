import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9azg15-h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9azg15-h"/>`,
		"fallback": "devicon-plain:wolfram",
	});
}

export default Component;
