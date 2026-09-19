import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rozo3-b3m.css';
import '../../css/w/w70la6bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="rozo3-b3m"/><path class="w70la6bye"/></g>`,
		"fallback": "grommet-icons:wifi-medium",
	});
}

export default Component;
