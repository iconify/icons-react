import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v889btb6l.css';
import '../../css/i/idyg40bum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v889btb6l"/><path class="idyg40bum"/>`,
		"fallback": "boxicons:window-arrow-in",
	});
}

export default Component;
