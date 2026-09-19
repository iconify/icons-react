import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuvh9jb3x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuvh9jb3x"/>`,
		"fallback": "fa7-solid:x-ray",
	});
}

export default Component;
