import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1v1c9bod.css';
import '../../css/u/uyff9_bee.css';
import '../../css/e/e_hknpjpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a1v1c9bod"/><path class="uyff9_bee"/><path class="e_hknpjpk"/></g>`,
		"fallback": "streamline-cyber-color:whale",
	});
}

export default Component;
