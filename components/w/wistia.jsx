import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmv89ubjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmv89ubjk"/>`,
		"fallback": "simple-icons:wistia",
	});
}

export default Component;
