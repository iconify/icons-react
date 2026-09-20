import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvo53-bvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kvo53-bvj"/>`,
		"fallback": "streamline-color:zodiac-9-flat",
	});
}

export default Component;
