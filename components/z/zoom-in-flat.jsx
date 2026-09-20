import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5qvnsbnb.css';
import '../../css/a/anodjgb8w.css';
import '../../css/q/qjr9rguzm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x5qvnsbnb"/><path class="anodjgb8w"/><path clip-rule="evenodd" class="qjr9rguzm"/></g>`,
		"fallback": "streamline-flex-color:zoom-in-flat",
	});
}

export default Component;
