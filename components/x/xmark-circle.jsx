import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcjhksbsj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcjhksbsj"/>`,
		"fallback": "f7:xmark-circle",
	});
}

export default Component;
