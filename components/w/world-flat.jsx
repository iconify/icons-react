import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uotemyb7a.css';
import '../../css/f/fz30vabuc.css';
import '../../css/l/lkxfdsbgt.css';
import '../../css/f/f3nb1bcuh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uotemyb7a"/><path clip-rule="evenodd" class="fz30vabuc"/><path clip-rule="evenodd" class="lkxfdsbgt"/><path class="f3nb1bcuh"/></g>`,
		"fallback": "streamline-plump-color:world-flat",
	});
}

export default Component;
