import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9n2s4bpf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hn3nmybwz.css';
import '../../css/s/s-527o7ge.css';
import '../../css/w/wmu9zebde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z9n2s4bpf"/><g class="dt0cm9dhy primary"><path class="hn3nmybwz"/><path class="s-527o7ge"/><path class="wmu9zebde"/></g>`,
		"fallback": "iconaut:weight-tilde-duo",
	});
}

export default Component;
