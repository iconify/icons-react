import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwt38cbxq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwt38cbxq"/>`,
		"fallback": "streamline-color:woman-symbol",
	});
}

export default Component;
