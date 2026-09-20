import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jnan5nbgz.css';
import '../../css/w/w5vci8bdy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jnan5nbgz"/><path class="w5vci8bdy"/></g>`,
		"fallback": "streamline-color:wifi-horizontal-flat",
	});
}

export default Component;
