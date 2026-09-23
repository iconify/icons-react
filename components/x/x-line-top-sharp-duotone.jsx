import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-k3mlf4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-k3mlf4q"/>`,
		"fallback": "keyline-icons:x-line-top-sharp-duotone",
	});
}

export default Component;
