import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cywuxumuo.css';
import '../../css/o/ov2kgdwro.css';
import '../../css/x/xpyf_2bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cywuxumuo"/><path clip-rule="evenodd" class="ov2kgdwro"/><path class="xpyf_2bdb"/>`,
		"fallback": "solar:wi-fi-router-minimalistic-bold",
	});
}

export default Component;
