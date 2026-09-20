import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4fnmxsdf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4fnmxsdf"/>`,
		"fallback": "streamline:wifi-solid",
	});
}

export default Component;
