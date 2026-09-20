import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bgm_-y5gj.css';
import '../../css/v/vmtis9bmr.css';
import '../../css/j/jx7exii8n.css';
import '../../css/b/b25i71vqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bgm_-y5gj"/><path class="vmtis9bmr"/><path class="jx7exii8n"/><path class="b25i71vqx"/></g>`,
		"fallback": "streamline-freehand-color:wifi-on",
	});
}

export default Component;
