import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqfh78bki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqfh78bki"/>`,
		"fallback": "garden:wechat-stroke-16",
	});
}

export default Component;
