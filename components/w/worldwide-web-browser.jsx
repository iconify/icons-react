import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v1hug_bsz.css';
import '../../css/s/s6i8zk-5y.css';
import '../../css/l/l5_dd4bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v1hug_bsz"/><path class="s6i8zk-5y"/><path class="l5_dd4bsw"/></g>`,
		"fallback": "streamline-freehand-color:worldwide-web-browser",
	});
}

export default Component;
