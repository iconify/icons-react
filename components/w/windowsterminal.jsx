import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bou7yz9xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bou7yz9xf"/>`,
		"fallback": "simple-icons:windowsterminal",
	});
}

export default Component;
