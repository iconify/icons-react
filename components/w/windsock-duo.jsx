import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udovfvbem.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mhumw6gqn.css';
import '../../css/o/o15o6ybrc.css';
import '../../css/j/jsjx8bc7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary udovfvbem"/><g class="dt0cm9dhy primary"><path class="mhumw6gqn"/><path class="o15o6ybrc"/><path class="jsjx8bc7k"/></g>`,
		"fallback": "iconaut:windsock-duo",
	});
}

export default Component;
