import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxa_mgbgt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxa_mgbgt"/>`,
		"fallback": "streamline:woman-symbol",
	});
}

export default Component;
