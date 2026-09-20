import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iw4gmnxtx.css';
import '../../css/m/m0iv8zt0r.css';
import '../../css/l/lcyumsbfg.css';
import '../../css/z/zyj4joh2r.css';
import '../../css/v/vmj8f58-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iw4gmnxtx"/><path class="m0iv8zt0r"/><path class="lcyumsbfg"/><path class="zyj4joh2r"/><path class="vmj8f58-h"/></g>`,
		"fallback": "streamline-freehand-color:wireless-house-signal",
	});
}

export default Component;
