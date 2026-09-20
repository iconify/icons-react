import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt8vvo7-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tt8vvo7-r"/>`,
		"fallback": "streamline-flex:wireless-fast-charging-solid",
	});
}

export default Component;
