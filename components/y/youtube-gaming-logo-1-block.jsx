import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8l2rutlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i8l2rutlg"/>`,
		"fallback": "streamline-logos:youtube-gaming-logo-1-block",
	});
}

export default Component;
