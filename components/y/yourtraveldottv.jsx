import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8vzvoawt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8vzvoawt"/>`,
		"fallback": "simple-icons:yourtraveldottv",
	});
}

export default Component;
