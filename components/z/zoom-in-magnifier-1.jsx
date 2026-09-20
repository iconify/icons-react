import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i43u13dxb.css';
import '../../css/k/kmc5z7fpw.css';
import '../../css/n/njudr8bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i43u13dxb"/><path class="kmc5z7fpw"/><path class="njudr8bor"/></g>`,
		"fallback": "streamline-freehand-color:zoom-in-magnifier-1",
	});
}

export default Component;
