import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm2axvmox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zm2axvmox"/>`,
		"fallback": "griddy-icons:wifi-off",
	});
}

export default Component;
