import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5xo13bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5xo13bfc"/>`,
		"fallback": "mynaui:wink-circle-solid",
	});
}

export default Component;
