import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abql8w45a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abql8w45a"/>`,
		"fallback": "streamline-logos:youtube-studio-logo-block",
	});
}

export default Component;
