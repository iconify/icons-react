import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb-67rblr.css';
import '../../css/e/el5xkem2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb-67rblr"/><path class="el5xkem2j"/>`,
		"fallback": "solar:wineglass-triangle-bold",
	});
}

export default Component;
