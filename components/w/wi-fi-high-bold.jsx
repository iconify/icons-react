import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjh_qrbin.css';
import '../../css/q/qnadq5bgl.css';
import '../../css/o/o8qapdbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjh_qrbin"/><path class="qnadq5bgl"/><path class="o8qapdbfp"/>`,
		"fallback": "solar:wi-fi-high-bold",
	});
}

export default Component;
