import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln93r60js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln93r60js"/>`,
		"fallback": "coolicons:x-round",
	});
}

export default Component;
