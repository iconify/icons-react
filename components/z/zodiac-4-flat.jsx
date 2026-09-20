import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykv5j8bld.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ykv5j8bld"/>`,
		"fallback": "streamline-color:zodiac-4-flat",
	});
}

export default Component;
