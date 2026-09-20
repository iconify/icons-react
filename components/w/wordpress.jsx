import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj9wosb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj9wosb6s"/>`,
		"fallback": "simple-icons:wordpress",
	});
}

export default Component;
