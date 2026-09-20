import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5h_q1b3w.css';
import '../../css/s/sltqfkbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5h_q1b3w"/><path class="sltqfkbzy"/>`,
		"fallback": "token:yam",
	});
}

export default Component;
