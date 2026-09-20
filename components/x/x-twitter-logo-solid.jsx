import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz_bp6bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rz_bp6bfx"/>`,
		"fallback": "streamline-logos:x-twitter-logo-solid",
	});
}

export default Component;
