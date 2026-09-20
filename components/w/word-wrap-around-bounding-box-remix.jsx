import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abw377k1s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abw377k1s"/>`,
		"fallback": "streamline-flex:word-wrap-around-bounding-box-remix",
	});
}

export default Component;
