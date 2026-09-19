import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxwhn9bzx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nxwhn9bzx"/>`,
		"fallback": "file-icons:zbrush",
	});
}

export default Component;
