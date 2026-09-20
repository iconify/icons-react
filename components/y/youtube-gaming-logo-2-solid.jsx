import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u624y-kis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u624y-kis"/>`,
		"fallback": "streamline-logos:youtube-gaming-logo-2-solid",
	});
}

export default Component;
