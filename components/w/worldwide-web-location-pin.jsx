import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pp0c2lbom.css';
import '../../css/v/vqcluw7tz.css';
import '../../css/s/s5r94nbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pp0c2lbom"/><path class="vqcluw7tz"/><path class="s5r94nbsq"/></g>`,
		"fallback": "streamline-freehand:worldwide-web-location-pin",
	});
}

export default Component;
