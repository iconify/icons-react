import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhe9qq2bc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lhe9qq2bc"/>`,
		"fallback": "basil:zoom-in-solid",
	});
}

export default Component;
