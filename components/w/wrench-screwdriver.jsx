import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qj7etz5lg.css';
import '../../css/h/hfyotsgxj.css';
import '../../css/m/minqdbolb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qj7etz5lg"/><path class="hfyotsgxj"/><path class="minqdbolb"/></g>`,
		"fallback": "streamline-cyber-color:wrench-screwdriver",
	});
}

export default Component;
