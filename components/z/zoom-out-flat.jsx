import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5qvnsbnb.css';
import '../../css/a/anodjgb8w.css';
import '../../css/c/cr3a1ja6b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x5qvnsbnb"/><path class="anodjgb8w"/><path clip-rule="evenodd" class="cr3a1ja6b"/></g>`,
		"fallback": "streamline-flex-color:zoom-out-flat",
	});
}

export default Component;
