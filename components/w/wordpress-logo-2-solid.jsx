import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv_e_ok3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rv_e_ok3j"/>`,
		"fallback": "streamline-logos:wordpress-logo-2-solid",
	});
}

export default Component;
