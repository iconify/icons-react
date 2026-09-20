import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm_nfg0bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm_nfg0bs"/>`,
		"fallback": "mynaui:wifi-medium-solid",
	});
}

export default Component;
