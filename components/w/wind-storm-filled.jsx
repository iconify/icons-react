import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc8acmedn.css';
import '../../css/a/altk2-lbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc8acmedn"/><path class="altk2-lbl"/>`,
		"fallback": "boxicons:wind-storm-filled",
	});
}

export default Component;
