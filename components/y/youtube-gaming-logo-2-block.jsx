import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqrbpbc4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mqrbpbc4v"/>`,
		"fallback": "streamline-logos:youtube-gaming-logo-2-block",
	});
}

export default Component;
