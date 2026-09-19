import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r48r1da-f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r48r1da-f"/>`,
		"fallback": "dinkie-icons:windows-alt",
	});
}

export default Component;
