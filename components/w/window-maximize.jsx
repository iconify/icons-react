import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uas_wub4v.css';
import '../../css/h/hoehcpaco.css';
import '../../css/n/n4j0dbcil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uas_wub4v"/><path class="hoehcpaco"/><path class="n4j0dbcil"/>`,
		"fallback": "prime:window-maximize",
	});
}

export default Component;
