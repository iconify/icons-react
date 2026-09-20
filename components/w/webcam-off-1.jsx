import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jwbw5ab9c.css';
import '../../css/t/toc50hb6s.css';
import '../../css/x/x130rzb-a.css';
import '../../css/r/rqpj5qg5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jwbw5ab9c"/><path class="toc50hb6s"/><path class="x130rzb-a"/><path class="rqpj5qg5e"/></g>`,
		"fallback": "streamline-freehand-color:webcam-off-1",
	});
}

export default Component;
