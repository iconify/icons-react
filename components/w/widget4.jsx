import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doqdr5n7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="doqdr5n7j"/>`,
		"fallback": "reicon:widget4",
	});
}

export default Component;
