import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/str6i-nan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="str6i-nan"/>`,
		"fallback": "streamline-logos:youtube-gaming-logo-3-solid",
	});
}

export default Component;
