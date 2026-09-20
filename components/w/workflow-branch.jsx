import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k4edyjbrx.css';
import '../../css/y/ypb45mfym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k4edyjbrx"/><path class="ypb45mfym"/></g>`,
		"fallback": "streamline-freehand-color:workflow-branch",
	});
}

export default Component;
