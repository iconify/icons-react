import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaw9wkbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaw9wkbuv"/>`,
		"fallback": "token:win",
	});
}

export default Component;
