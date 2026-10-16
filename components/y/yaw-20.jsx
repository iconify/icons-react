import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oywa71ble.css';
import '../../css/v/vf-xpzeqo.css';
import '../../css/k/ko9sw4b7p.css';
import '../../css/t/tnrvi8b7v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oywa71ble"/><path class="vf-xpzeqo"/><path class="ko9sw4b7p"/><path class="tnrvi8b7v"/>`,
		"fallback": "energy-icons:yaw-20",
	});
}

export default Component;
