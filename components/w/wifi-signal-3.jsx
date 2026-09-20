import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3b3_tbxp.css';
import '../../css/l/lup3lobpj.css';
import '../../css/d/dlkhr7bgl.css';
import '../../css/k/kfelpyebo.css';
import '../../css/e/e27ze5rio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o3b3_tbxp"/><path class="lup3lobpj"/><path class="dlkhr7bgl"/><path class="kfelpyebo"/><path class="e27ze5rio"/></g>`,
		"fallback": "streamline-ultimate-color:wifi-signal-3",
	});
}

export default Component;
