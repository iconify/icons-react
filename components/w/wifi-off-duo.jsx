import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mjaro1bfj.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/t/t1q1i-8uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mjaro1bfj"/><path class="qr4ochb5c wm-s"/><path class="t1q1i-8uy"/></g>`,
		"fallback": "withicons:wifi-off-duo",
	});
}

export default Component;
