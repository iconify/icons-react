import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b2_rnpc_j.css';
import '../../css/b/br0jhivlx.css';
import '../../css/f/frdsqmb_e.css';
import '../../css/k/khkmn4rbj.css';
import '../../css/y/yp5hozbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b2_rnpc_j"/><path class="br0jhivlx"/><path class="frdsqmb_e"/><path class="khkmn4rbj"/><path class="yp5hozbwj"/></g>`,
		"fallback": "streamline-freehand-color:worldwide-web-location-pin",
	});
}

export default Component;
