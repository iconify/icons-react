import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/x/x0o15yz4l.css';
import '../../css/j/jhrrmx4lh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path clip-rule="evenodd" class="x0o15yz4l"/><path class="jhrrmx4lh"/></g>`,
		"fallback": "streamline-kameleon-color:wind-wheel-pop",
	});
}

export default Component;
