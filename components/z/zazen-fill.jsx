import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asspptbxz.css';
import '../../css/b/bbvbykbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asspptbxz"/><path clip-rule="evenodd" class="bbvbykbhx"/>`,
		"fallback": "mingcute:zazen-fill",
	});
}

export default Component;
