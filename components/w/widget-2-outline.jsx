import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xed0uxxmk.css';
import '../../css/e/eaof3obga.css';
import '../../css/y/yu-tszbdn.css';
import '../../css/v/vbpr_wbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xed0uxxmk"/><path class="eaof3obga"/><path class="yu-tszbdn"/><path class="vbpr_wbom"/></g>`,
		"fallback": "solar:widget-2-outline",
	});
}

export default Component;
