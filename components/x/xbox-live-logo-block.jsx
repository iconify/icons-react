import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5zt5obnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5zt5obnd"/>`,
		"fallback": "streamline-logos:xbox-live-logo-block",
	});
}

export default Component;
