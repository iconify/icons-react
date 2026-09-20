import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn0xobb0g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kn0xobb0g"/>`,
		"fallback": "streamline-flex:zip-folder-solid",
	});
}

export default Component;
