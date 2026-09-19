import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l68n69bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l68n69bau"/>`,
		"fallback": "guidance:wheelchair-2",
	});
}

export default Component;
