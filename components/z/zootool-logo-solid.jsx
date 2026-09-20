import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trm18ccjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trm18ccjx"/>`,
		"fallback": "streamline-logos:zootool-logo-solid",
	});
}

export default Component;
