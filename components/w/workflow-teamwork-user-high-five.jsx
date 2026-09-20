import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zkzw0rzjy.css';
import '../../css/z/z3lg7fbtq.css';
import '../../css/y/y4dwb8q1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zkzw0rzjy"/><path class="z3lg7fbtq"/><path class="y4dwb8q1m"/></g>`,
		"fallback": "streamline-ultimate:workflow-teamwork-user-high-five",
	});
}

export default Component;
