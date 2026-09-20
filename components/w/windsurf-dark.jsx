import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzip_vo3j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzip_vo3j"/>`,
		"fallback": "thesvg-color:windsurf-dark",
	});
}

export default Component;
