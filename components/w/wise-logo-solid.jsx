import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ednels0te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ednels0te"/>`,
		"fallback": "streamline-logos:wise-logo-solid",
	});
}

export default Component;
