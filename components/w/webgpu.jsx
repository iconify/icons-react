import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd8ne7a8a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd8ne7a8a"/>`,
		"fallback": "devicon-plain:webgpu",
	});
}

export default Component;
