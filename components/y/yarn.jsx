import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax3i4wbrf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax3i4wbrf"/>`,
		"fallback": "devicon:yarn",
	});
}

export default Component;
