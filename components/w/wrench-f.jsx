import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4j0-p4on.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4j0-p4on"/>`,
		"fallback": "jam:wrench-f",
	});
}

export default Component;
