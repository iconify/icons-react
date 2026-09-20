import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx-65mx7u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nx-65mx7u"/>`,
		"fallback": "streamline-flex:wifi-secure-connection-solid",
	});
}

export default Component;
