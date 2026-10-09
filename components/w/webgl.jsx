import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb7tl124z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb7tl124z"/>`,
		"fallback": "devicon:webgl",
	});
}

export default Component;
