import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tige7vbdh.css';
import '../../css/q/qseskczqv.css';
import '../../css/w/w35y4zl1r.css';
import '../../css/p/p8udl8b8x.css';
import '../../css/l/lo0l2nbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tige7vbdh"/><path class="qseskczqv"/><path class="w35y4zl1r"/><path class="p8udl8b8x"/><path class="lo0l2nbjj"/></g>`,
		"fallback": "streamline-cyber-color:window-bookmark",
	});
}

export default Component;
