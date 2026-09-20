import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iey8yxkye.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iey8yxkye"/>`,
		"fallback": "pinhead:x",
	});
}

export default Component;
