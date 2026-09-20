import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyujgibwl.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyujgibwl"/>`,
		"fallback": "wi:yahoo-40",
	});
}

export default Component;
