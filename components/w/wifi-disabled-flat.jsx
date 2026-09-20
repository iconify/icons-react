import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c4epb4beb.css';
import '../../css/f/fl2mb7cys.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c4epb4beb"/><path class="fl2mb7cys"/></g>`,
		"fallback": "streamline-color:wifi-disabled-flat",
	});
}

export default Component;
