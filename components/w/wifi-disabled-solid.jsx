import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7sl9q-7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f7sl9q-7g"/>`,
		"fallback": "streamline:wifi-disabled-solid",
	});
}

export default Component;
