import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3_df9_ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3_df9_ck"/>`,
		"fallback": "mingcute:wheelchair-fill",
	});
}

export default Component;
