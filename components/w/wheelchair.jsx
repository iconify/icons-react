import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9kcr3qkv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9kcr3qkv"/>`,
		"fallback": "fa7-solid:wheelchair",
	});
}

export default Component;
