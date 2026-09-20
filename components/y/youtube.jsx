import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rfnwcgbgh.css';
import '../../css/l/lcxwjwn6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="rfnwcgbgh"/><path class="lcxwjwn6i"/></g>`,
		"fallback": "proicons:youtube",
	});
}

export default Component;
