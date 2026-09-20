import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q57ppbcla.css';
import '../../css/t/thtf9wqbd.css';
import '../../css/l/ls4bc2ban.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q57ppbcla"/><path class="thtf9wqbd"/><path class="ls4bc2ban"/></g>`,
		"fallback": "streamline-color:workspace-desk",
	});
}

export default Component;
