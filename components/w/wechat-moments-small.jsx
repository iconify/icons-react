import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2d999bge.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2d999bge"/>`,
		"fallback": "dinkie-icons:wechat-moments-small",
	});
}

export default Component;
