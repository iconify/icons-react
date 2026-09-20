import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl1__ds7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rl1__ds7n"/>`,
		"fallback": "streamline-logos:wise-logo-block",
	});
}

export default Component;
