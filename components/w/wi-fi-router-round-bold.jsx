import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9pm6-j4k.css';
import '../../css/y/yepfcjb2n.css';
import '../../css/y/ym5h4t9sc.css';
import '../../css/q/q2ovdihlu.css';
import '../../css/n/ni_65ybtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9pm6-j4k"/><path class="yepfcjb2n"/><path class="ym5h4t9sc"/><path class="q2ovdihlu"/><path clip-rule="evenodd" class="ni_65ybtq"/>`,
		"fallback": "solar:wi-fi-router-round-bold",
	});
}

export default Component;
