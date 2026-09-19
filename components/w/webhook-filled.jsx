import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjrnk-4ya.css';
import '../../css/j/j02epxblr.css';
import '../../css/o/o3j-a-5dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjrnk-4ya"/><path class="j02epxblr"/><path class="o3j-a-5dv"/>`,
		"fallback": "boxicons:webhook-filled",
	});
}

export default Component;
