import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x28pf5xcc.css';
import '../../css/w/w2c_87bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x28pf5xcc"/><path class="w2c_87bft"/></g>`,
		"fallback": "withicons:wifi-low-sketch",
	});
}

export default Component;
