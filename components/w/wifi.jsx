import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsh3n7vpt.css';
import '../../css/n/npoomsb7x.css';
import '../../css/s/sg68hbv5e.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsh3n7vpt"/><path class="npoomsb7x"/><path class="sg68hbv5e"/>`,
		"fallback": "fontisto:wifi",
	});
}

export default Component;
