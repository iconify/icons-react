import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuuw85byj.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuuw85byj"/>`,
		"fallback": "wi:wind-beaufort-10",
	});
}

export default Component;
