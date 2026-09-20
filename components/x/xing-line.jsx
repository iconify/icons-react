import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r94-7wsro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r94-7wsro"/>`,
		"fallback": "ri:xing-line",
	});
}

export default Component;
