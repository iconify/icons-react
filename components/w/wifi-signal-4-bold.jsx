import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd13973hj.css';
import '../../css/g/gu_5xob7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd13973hj"/><path class="gu_5xob7m"/>`,
		"fallback": "streamline-ultimate:wifi-signal-4-bold",
	});
}

export default Component;
